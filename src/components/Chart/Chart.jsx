import React, { useEffect, useRef } from "react";

// D3
import {
   axisLeft,
   axisRight, scaleLinear,
   select,
   axisBottom,
   scaleBand,
   scaleOrdinal,
} from "d3";

// Styled components
import {
  FilterContainer,
  StatsContainer,
  Stat,
  Square,
} from "./ChartStyled.jsx";

// Local Data
const data = [
  {
    day: "Monday",
    sales: 50,
    percentage: 50,
  },
  {
    day: "Tuesday",
    sales: 80,
    percentage: 70,
  },
  {
    day: "Wednesday",
    sales: 70,
    percentage: 20,
  },
  {
    day: "Thursday",
    sales: 180,
    percentage: 50,
  },
  {
    day: "Friday",
    sales: 30,
    percentage: 10,
  },
  {
    day: "Saturday",
    sales: 90,
    percentage: 30,
  },
  {
    day: "Sunday",
    sales: 100,
    percentage: 100,
  },
];

const Chart = () => {
  
  const graphWidth = 500;

  const ref = useRef();

  const margin = {
    top: 30,
    right: 40,
    bottom: 30,
    left: 35,
  };
  const width = graphWidth - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dataTypes = ["sales", "percentage"];

  useEffect(() => {
    const svgElement = select(ref.current);

    setTimeout(() => {
      createGraph(svgElement);
    }, 200);
  });

  const createGraph = (svgElement) => {
    // X scale. Creating a group with the days array. Taking the whole width from 0 to the width of the graph
    const scaleDays = scaleBand().domain(days).range([0, width]);
    svgElement
      .append("g")
      .attr("color", "#6E6E6E")
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
      .call(axisBottom(scaleDays));

    // Y scale (sales). Creating a group with the sales data. Taking the height based on the total sales collected from the data
    const scaleSales = scaleLinear()
      .domain([0, getMaxSales()])
      .range([height, 0]);
    const axisYLeft = axisLeft(scaleSales);
    // The max sales will be divided in 10 "ticks"
    axisYLeft.ticks(10).tickFormat((value) => {
      return value + " €";
    });
    svgElement
      .append("g")
      .attr("color", "#6E6E6E")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(axisYLeft);

    // Y scale (occupancy). As this is a % it goes from 0 to 100
    const scaleOccupancy = scaleLinear().domain([0, 100]).range([height, 0]);
    const axisYRight = axisRight(scaleOccupancy);
    // Divided in 5 ticks (20%)
    axisYRight.ticks(5).tickFormat((value) => {
      return value + " %";
    });
    svgElement
      .append("g")
      .attr("color", "#6E6E6E")
      .attr("transform", `translate(${width + margin.left}, ${margin.top})`)
      .call(axisYRight);

    // Scale for the sales and occupancy sub-categories
    const scaleProperties = scaleBand()
      .domain(dataTypes)
      .range([0, scaleDays.bandwidth()])
      .padding([0.10]);

    // Color for the sales and occupancy
    const color = scaleOrdinal()
      .domain(dataTypes)
      .range(["#135846", "#E23428"]);

    const colorHover = scaleOrdinal()
      .domain(dataTypes)
      .range(["#4A8A76", "#E09B8D"]);

    // popUp to display the data related to each rect
    const popUp = select("body")
      .append("div")
      .style("opacity", 0)
      .style("background-color", "#FFFFFF")
      .style("padding", "0")
      .style("border-radius", "8px")
      .style("border", "1px solid black")
      .style("box-shadow", "0px 16px 30px #00000014")
      .style("font-family", "Poppins")
      .style("font-size", "1.5rem")
      .style("text-align", "center");

    // Creating a rect for each day and for each subcategory
    svgElement
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => {
        return "translate(" + scaleDays(d.day) + ",0)";
      })
      .selectAll("rect")
      .data((d) => {
        return dataTypes.map((item) => {
          return {
            item: item,
            value: d[item],
          };
        });
      })
      // Entering the rect and giving it x & y to set the position where it is displayed and width & height based on the data
      .enter()
      .append("rect")
      .attr("x", (d) => {
        return scaleProperties(d.item) + margin.left + 8;
      })
      .attr("y", (d) => {
        return d.item === dataTypes[0]
          ? scaleSales(d.value) + margin.top
          : scaleOccupancy(d.value) + margin.top;
      })
      .attr("width", scaleProperties.bandwidth() - 16)
      .attr("height", (d) => {
        return d.item === dataTypes[0]
          ? height - scaleSales(d.value)
          : height - scaleOccupancy(d.value);
      })
      .attr("fill", (d) => {
        return color(d.item);
      })
      // Showing the popUp on mouse enter
      .on("mouseenter", (e, d) => {
        select(e.srcElement)
          .transition()
          .duration("100")
          .attr("fill", (d) => colorHover(d.item));

        popUp.transition().duration("100").style("opacity", 1);
        popUp
          .html(
            d.item === dataTypes[0]
              ? "Sales: " + d.value + " €"
              : "Occupancy: " + d.value + " %"
          )
          .style("position", "absolute")
          .style("width", "fit-content")
          .style("left", e.pageX + 10 + "px")
          .style("top", e.pageY - 5 + "px")
          .style("padding", "1rem");
      })
      .on("mouseleave", (e, d) => {
        select(e.srcElement)
          .transition()
          .duration("100")
          .attr("fill", (d) => color(d.item));

        popUp.transition().duration("100").style("opacity", 0);
      });
  };

  // Going through the data and adding together the sales values. For the stats at the top of the graph
  const getTotalSales = () => {
    let sales = 0;

    data.forEach((item) => {
      sales += item.sales;
    });
    return sales;
  };

  // Going through the data and adding together the occupancy values. Dividing it by the amount of data to get the average occupancy. For the stats at the top of the graph
  const getOccupancyPercentage = () => {
    let occupancy = 0;

    data.forEach((item) => {
      occupancy += item.percentage;
    });

    occupancy = Math.round(occupancy / data.length);
    return occupancy;
  };

  // Setting the maximum that was sold on any given data. Used to set the Y scale for the sales
  const getMaxSales = () => {
    let max = 0;
    data.forEach((item) => {
      if (item.sales > max) {
        max = item.sales;
      }
    });
    return max;
  };

  return (
    <div>
      <FilterContainer>
        <p>Reservation stats</p>
      </FilterContainer>
      <StatsContainer>
        <Stat>
          <Square color="#135846" />
          <p>Sales</p>
          <p>{getTotalSales()} €</p>
        </Stat>
        <Stat>
          <Square color="#E23428" />
          <p>Occupancy</p>
          <p>{getOccupancyPercentage()} %</p>
        </Stat>
      </StatsContainer>
      <svg
        ref={ref}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        style={{ display: "flex", margin: "auto" }}
      ></svg>
    </div>
  );
};

export default Chart;

