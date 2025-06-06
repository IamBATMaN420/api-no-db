import express from "express"

const app = express();

app.use(express.json())

const products = [
  {
    name: "Laptop",
    price: 49999.99,
    quantity: 1,
    active: true
  },
  {
    name: "Wireless Mouse",
    price: 799.00,
    quantity: 2,
    active: true
  },
  {
    name: "Mechanical Keyboard",
    price: 2999.50,
    quantity: 1,
    active: false
  },
  {
    name: "27-inch Monitor",
    price: 13499.00,
    quantity: 1,
    active: true
  },
  {
    name: "USB-C Hub",
    price: 1499.00,
    quantity: 3,
    active: true
  },
  {
    name: "Noise Cancelling Headphones",
    price: 8999.99,
    quantity: 1,
    active: false
  },
  {
    name: "Webcam",
    price: 2199.00,
    quantity: 2,
    active: true
  },
  {
    name: "Gaming Chair",
    price: 12499.00,
    quantity: 1,
    active: true
  }
];
// dummy data

app.get("/api", (req, res) => {
  res.send("helllo it's working!")
});

app.get("/api/products", (req, res) => {
  res.json(products);
})
// reading all product

app.post("/api/products", (req, res) => {
  products.push(req.body)
  res.status(201).json({ "masage": "product is added" })
})
// crateing product

app.listen(3000, () => {
  console.log(`server is running on port 3000`)
})