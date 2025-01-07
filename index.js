const express = require("express")
const app = express()
const port = 3000
const sRouter = require("./controllers/lecturerControllers")

app.use(express.json())
app.use("/", sRouter)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})