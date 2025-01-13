const express = require("express")
const router = express.Router()
const {verifyToken, authorizeUserToken} = require("../middleware/authProtect")
const isAdmin = require("../middleware/userAdmin")

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
router.get("/lecturers", verifyToken, getAllLecturer)

// GET lecturer data based on nidn
router.get("/lecturer/search", verifyToken, getLecturerByNidn)

// POST req to add new lecturer data
router.post("/add-lecturer", verifyToken, isAdmin, createNewLecturer)

// PUT req to edit a lecturer data based on nidn
router.put("/lecturer/edit", verifyToken, isAdmin, editLecturer)

// DELETE request handler based on
router.delete("/lecturer/delete", verifyToken, authorizeUserToken, isAdmin, deleteLecturer)

module.exports = router