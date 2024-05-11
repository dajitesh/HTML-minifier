// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

// const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');
const contactRouter = require('./routers/contactRouter');
const feedbackRouter = require('./routers/feedbackRouter');
// const userRouter = require('./routers/userRouter');

// middleware

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

// app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/feedback', feedbackRouter);

const port = 5000;



app.listen(port, () => { console.log('express server open') });