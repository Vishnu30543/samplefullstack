// models/student.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
name: { type: String, required: false },
age: { type: Number, required: false },
email: { type: String, required: false, unique: true },
phone: { type: String, required: false },
address: { type: String, required: false },
photo : { type: String, required: false }, // Path to the uploaded photo
}, );

//module.exports = mongoose.model('Student', studentSchema);
export default mongoose.model('Student', studentSchema);