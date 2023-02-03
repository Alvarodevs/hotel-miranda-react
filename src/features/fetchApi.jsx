// Example POST method implementation:
const url = process.env.REACT_APP_URI;

async function fetchApi(direction, method, data) {
   console.log(data)
   const tokenStored = localStorage.getItem("token");
   const response = await fetch(url + direction, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${tokenStored}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data ? JSON.stringify(data) : null,
   });
   
   return response.json();
}

export default fetchApi;
