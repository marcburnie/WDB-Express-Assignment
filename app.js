/** @format */

const express = require("express");
const app = express();

const anim = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof woof",
  cat: "Meow",
  person: "What do you want?",
};

let response = "";

app.get("/", (req, res) => {
  res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", (req, res) => {
  anim[req.params.animal]
    ? res.send(anim[req.params.animal])
    : res.send("Sorry, page not found ... What are you doing with your life?");
});

app.get("/repeat/:word/:num", (req, res) => {
  for (let i = 0; i < req.params.num; i++) {
    response += req.params.word + " ";
  }
  res.send(response);
});

app.get("/*", (req, res) => {
  res.send("Sorry, page not found ... What are you doing with your life?");
});

app.listen(3000, () => {
  console.log("Server initialized. Listening on port 3000");
});
