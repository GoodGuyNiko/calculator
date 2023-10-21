import express from "express"
import axios from "axios"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/start", (req, res) => {
    res.render("start.ejs");
});

app.get("/type", (req, res) => {
    res.render("type.ejs");
});

app.get("/duration", (req,res) => {
    res.render("duration.ejs");
});

app.get("/bdl", (req,res) => {
    res.render("bdl.ejs");
});

app.get("/addons", (req,res) => {
    res.render("addons.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
