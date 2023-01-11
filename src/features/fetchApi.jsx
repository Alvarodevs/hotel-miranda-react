// Example POST method implementation:
//getItem
async function fetchApi(url, method, token, data) {

	const response = await fetch(url, {
      method: method, 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer " + token ,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data),
   });
   return response.json();
}

export default fetchApi;