import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from "./routes/user.route.js";

const app = express()
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT || 4000;
const MONGODB_URI=process.env.MONGODB_URI;

try {
    mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log(error);
}
app.use("/user",userRoute);


app.get('/', (req, res) => {
  res.send('LetsChat Now go!');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
