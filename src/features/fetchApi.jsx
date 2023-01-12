// Example POST method implementation:

async function fetchApi(url, method, data) {
	const tokenStored = localStorage.getItem("token")
	const response = await fetch(url, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer " + tokenStored,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data ? JSON.stringify(data) : null,
   });
   return response.json();
}

export default fetchApi;