import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import adoptionRoutes from './routes/adoptionRoutes.js';// Add `.js` extension

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "https://67b221b9db6e1fbc8f846dc0--incandescent-dragon-98cda7.netlify.app", credentials: true }));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api', adoptionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
