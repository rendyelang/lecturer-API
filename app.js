require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const lecturerRouter = require("./routes/lecturerControllers")
const authRouter = require("./routes/auth")

app.use(express.json())
app.use(lecturerRouter)
app.use(authRouter)

// Handle not found service
app.use((req, res) => {
    res.status(404).json({message: "Service Not Found!"})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})