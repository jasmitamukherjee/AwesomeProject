const express= require("express")
const bodyParser=require("body-parser")
const mongoose= require("mongoose")
const crypto = require("crypto")
const jwt=require("jsonwebtoken")
const app= express()
const port =3000;
const cors=require("cors")

const http= require("http").createServer(app)
const io =require("socket.io")(http)
app.use(cors())


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
const User= require("./models/User")

mongoose
  .connect('mongodb+srv://jasmitamukherjee4:jasmita@cluster0.upqmsms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error);
  });



app.post('/register', async (req, res) => {
    try {
   
      const userData = req.body;
  
  
      const newUser = new User(userData);
  
      await newUser.save();
  
      const secretKey = crypto.randomBytes(32).toString('hex');
  
    
      const token = jwt.sign({userId: newUser._id} ,secretKey);
      // console.log(token)
      res.status(200).json({token});
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });
  app.get('/', (req, res) => {
    res.send('Hello Jasmita!')
  })
  
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });