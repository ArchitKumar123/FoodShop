import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://architraul23:Archit2004@cluster0.vyqsiwa.mongodb.net/').then(() => console.log("DB Connected"));
}