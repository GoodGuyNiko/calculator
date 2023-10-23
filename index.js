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

app.post("/start", (req, res) => {
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('calculator-form');
        const resultDiv = document.getElementById('result');
    
        form.addEventListener('submit', function (e) {
            e.preventDefault();
    
            const product = form.querySelector('input[name="product"]:checked').value;
            let totalPrice = 0;

            if (userChoice === "imagefilm") {
        // Wenn der Benutzer 'option1' ausgewählt hat
            res.redirect("/type");
            } else if (userChoice === "recruitingfilm") {
        // Wenn der Benutzer 'option2' ausgewählt hat
            res.send("/type");
            } 
            else if (userChoice === "produktvideo") {
        // Wenn der Benutzer 'option2' ausgewählt hat
            res.send("/product");
            }
        else {
        // Standardaktion, wenn keine der obigen Bedingungen erfüllt ist
        res.send("/cameras")};
        });
    });
});

app.get("/type", (req, res) => {
    res.render("type.ejs");
});

app.get("/duration", (req,res) => {
    res.render("duration.ejs");
});

app.post("/umleitungduration", (req, res) => {
    res.redirect("/bdl");
});

app.get("/cameras", (req,res) => {
    res.render("cameras.ejs");
});

app.post("/umleitungcameras", (req, res) => {
    res.redirect("/bdl");
});

app.get("/bdl", (req,res) => {
    res.render("bdl.ejs");
});

app.get("/addons", (req,res) => {
    res.render("addons.ejs");
});

app.get("/product", (req,res) => {
    res.render("product.ejs");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
