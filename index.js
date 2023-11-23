const express = require("express");
const usersRouter = require("./routes/usersRouter");

const app = express();

//para parsear un json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola");
});

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Servidor arrancado");
});
