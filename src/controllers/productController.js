import crypto from "crypto";

const products = [{
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

export const getAllProduct = (req, res) => {

  res.json(products);
}
// reading all product


export const creatingProduct = (req, res) => {

  const { name, price, quantity, active } = req.body;
  if (!name) {
    res.status(422).json(
      { "message": "nahi honga bhai" }
    )
  }
  const id = crypto.randomUUID()
  products.push({ id, name, price, quantity, active })
  res.status(201).json({ "masage": "product is added", id })

}
// crateing product



export const getProductById = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if (!product) {
    res.status(404).json({
      "message": "WTH go away"
    })
  }
  res.status(201).json(product)
}
// get a product by :id

export const updateProduct = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if (!product) {
    res.status(404).json({
      "message": "WTH go away"
    })
  }

  const { name, price, quantity, active } = req.body;
  if (!name) {
    res.json({
      "msssage": "Nah hain bhai",
    })
  }
  if (name) {
    product.name = name
  }
  if (price) {
    product.price = price
  }
  if (quantity) {
    product.quantity = quantity
  }
  if ("active" in req.body) {
    product.active = active
  }
  res.status(201).json({
    "messgae": "Update is workingg"
  })
}
// update data 

export const deleteProduct = (req, res) => {
  const productIndex = products.find(productIndex => productIndex.id == req.params.id)
  if (productIndex == -1) {
    res.status(404).json({
      "messgae": "hey unexpected backchodi!"
    })
  }

  products.splice(productIndex, 1)
  res.status(201).json({
    "message": "Delete is working!!!"
  })

}
// delteing data




