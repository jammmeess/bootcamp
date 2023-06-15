const ex = require("express");
const fs = require("fs");
const bk = require("./books");
const app = ex();

app.use(ex.json());
const books = bk.books;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/home", (req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  let book = false;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id == Number(req.params.id)) {
      book = books[i];
      break;
    }
  }

  if (book) {
    res.send(book);
  } else {
    res.status(404);
    res.send("Book not found!");
  }
});

app.put("/api/books", (req, res) => {
  let new_book = {
    id: books.length,
    title: req.body.title,
    genre: req.body.genre,
  };
  console.log(req.body);
  books.push(new_book);
  res.send(new_book);
});

app.put("/api/books/:id", (req, res) => {
  let book = false;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id == Number(req.params.id)) {
      book = books[i];
      break;
    }
  }
  if (book) {
    console.log(req.body);
    book.title = req.body.title;
    book.genre = req.body.genre;
    res.send(book);
  } else {
    res.status(404);
    res.send("Book not Found");
  }
});

app.listen(3000);
