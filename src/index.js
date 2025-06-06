import express from "express"

const app = express();

app.get("/api", (req, res) => {
  res.send("helllo it's working!")
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`)
})