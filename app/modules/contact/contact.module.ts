import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String, required: [true, "Name is Required"], minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    email: {
        type: String, required: [true, "Email is Required"], minlength: [5, "Email must be at least 5 characters"],
        maxlength: [100, "Email cannot exceed 100 characters"],
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    subject: {
        type: String, required: [true, "Subject is Required"], minlength: [3, "Subject must be at least 3 characters"],
        maxlength: [100, "Subject cannot exceed 100 characters"]
    },
    message: {
        type: String, required: [true, "Message is Required"], minlength: [10, "Message must be at least 10 characters"],
        maxlength: [1000, "Message cannot exceed 1000 characters"]
    },
})

export const contact = mongoose.model('contact', contactSchema);