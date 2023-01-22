const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();
const app = express()

const { Schema } = mongoose;

const productSchema = new Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true }
},
    {
        timestamps: true
    }
)

const Products = mongoose.model("products", productSchema)

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>")
})


//get product
app.get("/products", (req, res) => {
    Products.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})
//get product by id
app.get("/products/:id", (req, res) => {
    const { id } = req.params
    Products.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})
//add product
app.post("/products", (req, res) => {
    const product = new Products({
        img: req.body.img,
        title: req.body.title,
        price: req.body.price,
        count: req.body.count

    })
    product.save()
    res.send({ message: "Product created" })
})
//delete product
app.delete("/products/:id", (req, res) => {
    const { id } = req.params
    Products.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Deleted data")
        } else {
            res.status(404).json({ message: err })
        }
    })
})




const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
mongoose.set('strictQuery', true)
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DB connected");
        app.listen(PORT, () => {
            console.log("server start");
        })
    }
})