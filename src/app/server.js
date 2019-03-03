const express = require("express");
const Twitter = require("twit");
const app = express();

app.listen(3000, () => console.log("Server running"));

const api_client = new Twitter({
  consumer_key: "PI1ZgBM0FNAMH5pVqRww",
  consumer_secret: "iwlrt4o6Gjl8xhnje3SdszuiYUxJKjHPPxfIjbQ8",
  access_token: "ACCESS_TOKEN",
  access_token_secret: "ACCESS_TOKEN_SECRET"
});
