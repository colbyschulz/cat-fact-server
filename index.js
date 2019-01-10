const express = require("express");
var cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
const FACT_URL = "https://catfact.ninja/fact";
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  try {
    const fact = await fetch(FACT_URL).then(resp => resp.json());
    res.json(fact);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
