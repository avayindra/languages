const express = require("express");
const app = express();

const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let planguages = [];

app.get("/", (req, res) => {
  res.render("index", { plNames: planguages });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});
app.post("/", (req, res) => {
  const planguage = req.body.planguage;
  planguages.push(planguage);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running successfully at http://localhost:${PORT}`);
});
