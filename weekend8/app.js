const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

const dbURI =
  "mongodb+srv://john:pass@cluster0.c0iwrdc.mongodb.net/cluster0?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("./single-blog", (req, res) => {
  Blog.findById("630296bdc6e07371f0445c64")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

const blogs = [
  {
    title: "Yoshi finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Mario finds stars",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
];

app.get("/", (req, res) => {
  //   res.send("<p>home page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  //   res.send("<p>about page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a blog" });
});
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
