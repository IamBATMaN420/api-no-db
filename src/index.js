import express from "express"
import crypto from "crypto";
import router from "./routes/productRoutes.js";

const app = express();

app.use(express.json())

app.use("/api/products",router)

app.listen(3010, () => {
  console.log(`server is running on port 3010`)
})
