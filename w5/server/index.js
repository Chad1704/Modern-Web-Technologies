import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse form data

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server Main Page");
});

app.post("/register", (req, res) => {
  console.log("Query:", req.query);
  console.log("Params:", req.params);
  console.log("Body:", req.body);
  console.log("TEST dasdasd");

  res.json({ msg: "I stole your info" }); // ✅ match frontend field
});

app.get("/data", (req, res) => {
  const user01 = {
    name: "Chad",
    email: "chad.katz@humber.ca",
    age: 20,
    bio: "Test Bio",
  };

  res.json(user01); // ✅ only this
});

app.use("", (req, res) => {
  res.status(404).send("404 page not found");
});
