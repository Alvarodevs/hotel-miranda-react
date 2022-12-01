import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


const Chart = () => {
   //Data for chart to display
   const [days] = useState([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
   ]);
   const [data] = useState({
      sales: [
         { day: "12/02/2022", value: 2500 },
         { day: "12/03/2022", value: 3000 },
         { day: "12/04/2022", value: 1100 },
         { day: "12/05/2022", value: 800 },
         { day: "12/06/2022", value: 2850 },
         { day: "12/07/2022", value: 4673 },
         { day: "12/08/2022", value: 3857 },
      ],
      occupation: [
         { day: "12/02/2022", value: 20 },
         { day: "12/03/2022", value: 32 },
         { day: "12/04/2022", value: 38 },
         { day: "12/05/2022", value: 30 },
         { day: "12/06/2022", value: 67 },
         { day: "12/07/2022", value: 89 },
         { day: "12/08/2022", value: 70 },
      ],
   });

   const ref = useRef();
   useEffect(() => {
      //setting margins from parent component w. props
      const margin = {
         top: 30,
         right: 5,
         bottom: 50,
         left: 40,
      };

      //setting width & height of chart using the one from parent
      const chartWidth =
         parseInt(d3.select("#d3Parent").style("width")) -
         margin.left -
         margin.right;
      const chartHeight =
         parseInt(d3.select("#d3Parent").style("height")) -
         margin.top -
         margin.bottom;

      //sizing svg
      const svg = d3
         .select(ref.current)
         .attr("width", chartWidth + margin.right + margin.left)
         .attr("height", chartHeight + margin.top + margin.bottom);

      //xScale & yScale creation
      const xScale = d3
         .scaleBand()
         .domain(d3.range(days.length))
         .range([margin.left, chartWidth - margin.right])
         .padding(0.3);

      svg.append("g")
         .attr("transform", `translate(0, ${chartHeight})`)
         .call(
            d3
               .axisBottom(xScale)
               .tickFormat((i) => days[i])
               .tickSizeOuter(0)
         );

      const maxValueHeightSales = d3.max(data.sales, (d) => d.value);
      const yScaleSales = d3
         .scaleLinear()
         .domain([0, maxValueHeightSales])
         .range([chartHeight, margin.top]);

      const yScaleOccupancy = d3
         .scaleLinear()
         .domain([0, 100])
         .range([chartHeight, margin.top]);

      //creation of y (sales data) scale bar
      svg.append("g")
         .attr("transform", `translate(${margin.left}, 0)`)
         .call(d3.axisLeft(yScaleSales));

      //creation of y (occupancy data) scale bar
      svg.append("g")
         .attr("transform", `translate(${chartWidth - margin.right})`)
         .call(d3.axisRight(yScaleOccupancy));

      //rectangles of sales data
      svg.append("g")
         .attr("fill", "var(--color-greenDark)")
         .selectAll("rect")
         .data(data.sales)
         .join("rect")
         .attr("x", (d, i) => xScale(i))
         .attr("y", (d) => yScaleSales(d.value))
         .attr("height", (d) => yScaleSales(0) - yScaleSales(d.value))
         .attr("width", xScale.bandwidth());

      svg.append("g")
         .attr("fill", "var(--color-red)")
         .selectAll("rect")
         .data(data.occupation)
         .join("rect")
         .attr("x", (d, i) => xScale(i))
         .attr("y", (d) => yScaleOccupancy(d.value))
         .attr("height", (d) => yScaleOccupancy(0) - yScaleOccupancy(d.value))
         .attr("width", xScale.bandwidth());
   }, []);

   return (
      <div>
         <svg ref={ref}>
         </svg>
      </div>
   );
};

export default Chart;
