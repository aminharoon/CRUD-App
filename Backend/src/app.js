const express = require("express")
const cors = require('cors')
const nodeModel = require("./models/node.model")
const path = require("path")


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("./public"))

app.post('/api/node', async (req, res) => {
    try {
        const { name, age } = req.body

        const node = await nodeModel.create({
            name, age
        })
        res.status(201).json({
            message: "Node is created",
            node
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating node",
            error: error.message
        })
    }
})

app.get('/api/node', async (req, res) => {
    try {

        const node = await nodeModel.find()
        res.status(200).json({
            message: "Successfully fetch the data from the data base",
            node
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching node",
            error: error.message
        })

    }
})
app.patch('/api/node/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { age } = req.body
        const node = await nodeModel.findByIdAndUpdate(id, { age })
        res.status(200).json({
            message: "Data updated",
            node
        })


    } catch (error) {
        res.status(500).json({
            message: "Error while update the node",
            error: error.message
        })
    }
})
app.delete('/api/node/:id', async (req, res) => {
    try {
        const id = req.params.id
        const node = await nodeModel.findByIdAndDelete(id)
        res.status(200).json({
            message: "Node Deleted",
            node
        })

    } catch (error) {
        res.status(500).json({
            message: "Error while deleting",
            error: error.message
        })

    }

})
app.put("/api/node/:id", async (req, res) => {
    try {
        const id = req.params.id
        const { name, age } = req.body
        const node = await nodeModel.findByIdAndUpdate(id, { name, age })
        res.status(200).json({
            message: "successfully updating data",
            node
        })

    } catch (error) {
        res.status(500).json({
            message: "Error while updating ",
            error: error.message
        })

    }
})


app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})
module.exports = app