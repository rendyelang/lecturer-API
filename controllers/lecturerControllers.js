const express = require("express")
const db = require("../models/db")
const router = express.Router()


// Main Page GET request
router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to lecturer API"
    })
})

// GET all lecturer data
router.get("/lecturers", (req, res) => {
    const query = "SELECT * FROM lecturer_data"
    db.query(query, (err, results) => {
        if (err) {
            console.log(`Error fetching data: ${err}`)
            res.status(500).json({
                message: "Internal Server Error"
            })
        } else {
            res.status(200).json(results)
        }
    })
})

// GET lecturer data based on nidn
router.get("/lecturer/search", (req, res) => {
    const nidn = req.query.nidn
    const query = "SELECT * FROM lecturer_data WHERE nidn = ?"
    if (!nidn) {
        return res.status(400).json({ message: "Query parameter nidn is required" });
    }
    db.query(query, [nidn], (err, results) => {
        if (err) {
            console.log(`Error get lecturer details: `, err)
            res.status(500).json({
                message: "Internal Server Error!"
            })
        } else if (results.length === 0) {
            res.status(404).json({
                message: "Lecturer Not Found!"
            })
        } else {
            res.status(200).json(results[0])
        }
    })
})

// POST req to add new lecturer data
router.post("/add-lecturer", (req, res) => {
    const {nidn, name, title, gender, faculty} = req.body

    if (!nidn || !name || !title || !gender || !faculty) {
        return res.status(500).json({message: "Data can't be empty"})
    }

    const query = "INSERT INTO lecturer_data (nidn, name, title, gender, faculty) VALUES (?, ?, ?, ?, ?)"
    db.query(query, [nidn, name, title, gender, faculty], (err, results) => {
        if (err) {
            res.status(500).json({message: "Data failed to added"})
        } else {
            res.status(200).json({message: "Data added"})
        }
    })
})

// PUT req to edit a lecturer data based on nidn
router.put("/lecturer/edit", (req, res) => {
    const nidnReq = req.query.nidn
    const {nidn, name, title, gender, faculty} = req.body
    const query = "UPDATE lecturer_data SET nidn = ?, name = ?, title = ?, gender = ?, faculty = ? WHERE nidn = ?"

    if (!nidnReq) {
        return res.status(400).json({ message: "Query parameter nidn is required" });
    }

    if (!nidn || !name || !title || !gender || !faculty) {
        return res.status(400).json({ message: "All fields are required" });
    }

    db.query(query, [nidn, name, title, gender, faculty, nidnReq], (err, results) => {
        if (err) {
            res.status(500).json({message: "Internal Server Error", error: err})
        } else if (results.affectedRows === 0) {
            res.status(404).json({message: "nidn didn't match any"})
        } else {
            res.status(200).json({message: "Data Edited Successfully"})
        }
    })
})

// DELETE request handler based on
router.delete("/lecturer/delete", (req, res) => {
    const nidn = req.query.nidn
    const query = "DELETE FROM lecturer_data WHERE nidn = ?"
    if (!nidn) {
        return res.status(400).json({ message: "Query parameter nidn is required" });
    }

    db.query(query, [nidn], (err, results) => {
        if (err) {
            res.status(500).json({
                message: "Internal Server Error",
                error: err
            })
        } else if (results.affectedRows === 0) {
            res.status(404).json({
                message: "failed delete. nidn not found"
            })
        } else {
            res.status(200).json({
                message: "Data deleted!"
            })
        }
    })
})

// Handle not found service
router.use((req, res) => {
    res.status(404).json({message: "Service Not Found!"})
})

module.exports = router