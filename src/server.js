const express = require("express");
const db = require("./models");
const app = express();
const port = process.env.PORT || 3535;



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

require("./routes/turorial.routes")(app);

app.listen(port, () => {
  console.log(`listening to ${port}`)
})