const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send(`
  <h1>Hello! Bois how are you</h1>
  <a href="/about">Go to About Page</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"/>
    <button>Click ME Bois</button>
    <br>
    <a href="/help">Go to Database</a>
    `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Ayush",
      Email: "ayush@mooncode.com",
    },
    {
      name: "Asmit",
      Email: "Asmit@mooncode.com",
    },
    {
      name: "Devesh",
      Email: "Devesh@mooncode.com",
    },
    {
      name: "Divyansh",
      Email: "Divyansh@mooncode.com",
    },
    {
      name: "Aseem",
      Email: "Aseem@mooncode.com",
    }
  ]);
});

app.listen(5000);
