// Define the URL you want to shorten
const urlToShorten = "https://www.example.com/very/long/url/to/shorten";

// Define your Bitly access token
const accessToken = "YOUR_ACCESS_TOKEN";

// Define the Bitly API endpoint
const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

// Define the request parameters
const requestData = {
  long_url: urlToShorten
};

// Send a POST request to the Bitly API
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  // Log the shortened URL to the console
  console.log(data.link);
})
.catch(error => {
  // Handle any errors that occur during the API request
  console.error(error);
});