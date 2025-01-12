const express = require("express")
const router = express.Router()

const {
    getMainPage, 
    getAllLecturer, 
    getLecturerByNidn, 
    createNewLecturer, 
    editLecturer, 
    deleteLecturer
} = require("../controllers/lecturer")


// Main Page GET request
router.get("/", getMainPage)

// GET all lecturer data
router.get("/lecturers", getAllLecturer)

// GET lecturer data based on nidn
router.get("/lecturer/search", getLecturerByNidn)

// POST req to add new lecturer data
router.post("/add-lecturer", createNewLecturer)

// PUT req to edit a lecturer data based on nidn
router.put("/lecturer/edit", editLecturer)

// DELETE request handler based on
router.delete("/lecturer/delete", deleteLecturer)

module.exports = router