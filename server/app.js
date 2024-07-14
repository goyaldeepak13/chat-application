import express from 'express';
import userRoute from './routes/user.js';   

const app = express();

app.use('/user', userRoute) // this user is a prefix

// app.get('/',(req, res) =>{
//     res.send("hellooooo")
// })

app.listen(3000, () => {
    console.log('listening on port 3000');
});

