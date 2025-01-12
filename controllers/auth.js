const bcrypt = require("bcrypt")
const db = require("../models/db")

const signUp = (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        return res.status(400).json({message: "Username and password are required"})
    }
    
    const isUserExist = "SELECT * FROM admin WHERE username = ?"
    db.query(isUserExist, [username], (err, results) => {
        if (err) {
            return res.status(500).json({message: "Internal Server Error"})
        } else if (results.length > 0) {
            return res.status(400).json({message: "Username already exist"})
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10)

        const query = "INSERT INTO admin (username, password) VALUES (?, ?)"
        db.query(query, [username, hashedPassword], (err, results) => {
            if (err) {
                res.status(500).json({message: "Internal Server Error", error: err})
            } else {
                res.status(200).json({message: "User registered successfully"})
            }
        })
    })
}

const signIn = (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        return res.status(400).json({message: "Username and password are required"})
    }

    const query = "SELECT * FROM admin WHERE username = ?"
    db.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({message: "Internal Server Error"})
        } else if (results.length === 0) {
            return res.status(404).json({message: "User not found"})
        }

        const user = results[0]
        const isPasswordMatch = bcrypt.compareSync(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({message: "Invalid password"})
        }

        res.status(200).json({message: "Login success"})
    })
}

module.exports = {signIn, signUp}