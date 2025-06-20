import express from 'express';
const router = express.Router();
import Student from '../models/Student.js';

import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Specify the directory to save uploaded files
//     },
//     filename: function (req, file, cb) {
//         const suffix = Date.now(); // Get current timestamp
//         cb(null, suffix + '-' + file.originalname); // Append timestamp to the original filename
//     }
// });

const storage = multer.memoryStorage(); // Store files in memory as Buffer objects

 const upload = multer({ storage: storage });


// Route to create a new student
router.post('/create', upload.single('photo'), async (req, res) => {
    try {
        const { name, age, email, phone, address } = req.body;
        
        // const photopath = req.file ? req.file.path : null; // Get the path of the uploaded photo
        // Create student record
        const photoBase64 = req.file ? req.file.buffer.toString('base64') : null; // Convert photo to base64

        const newStudent = new Student({
            name,
            age,
            email,
            phone,
            address,
            photo: photoBase64 // Store the base64 encoded photo
        });
        
        console.log('Received a POST request to create a student');
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (err) {
        console.error('Error creating student:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
