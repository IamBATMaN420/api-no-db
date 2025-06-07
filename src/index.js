import express from "express"
import crypto from "crypto";

const app = express();

app.use(express.json())

const products = [
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce62993",
    name: "Laptop",
    price: 49999.99,
    quantity: 1,
    active: true
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce62994",
    name: "Wireless Mouse",
    price: 799.00,
    quantity: 2,
    active: true
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce62997",
    name: "Mechanical Keyboard",
    price: 2999.50,
    quantity: 1,
    active: false
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce62999",
    name: "27-inch Monitor",
    price: 13499.00,
    quantity: 1,
    active: true
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce62990",
    name: "USB-C Hub",
    price: 1499.00,
    quantity: 3,
    active: true
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce62995",
    name: "Noise Cancelling Headphones",
    price: 8999.99,
    quantity: 1,
    active: false
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce629988",
    name: "Webcam",
    price: 2199.00,
    quantity: 2,
    active: true
  },
  {
    id: "0bf735e2-fb4a-445a-9dcd-7b672ce629977",
    name: "Gaming Chair",
    price: 12499.00,
    quantity: 1,
    active: true
  }
];
// dummy data

app.get("/api", (req, res) => {
  res.send("helllo it's working!1")
});

app.get("/api/products", (req, res) => {

  res.json(products);
})
// reading all product


app.post("/api/products", (req, res) => {

  const { name, price, quantity, active } = req.body;
  if (!name) {
    res.status(422).json(
      { "message": "nahi honga bhai" }
    )
  }
  const id = crypto.randomUUID()
  products.push({ id, name, price, quantity, active })
  res.status(201).json({ "masage": "product is added", id })


})
// crateing product



app.get("/api/product/:id",)

app.listen(3000, () => {
  console.log(`server is running on port 3000`)
})