const express = require("express");
var cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
const FACT_URL = "https://catfact.ninja/fact";
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  fetch(FACT_URL)
    .then(resp => resp.json())
    .then(r => res.json(r));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
