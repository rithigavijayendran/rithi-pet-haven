const express=require('express')
const mongoose=require('mongoose') 
const cors=require('cors')
const { RegisterModel,LoginModel,AdoptModel} = require('./models/schema');


const app = express()
app.use(express.json())
app.use(cors())
async function connectdb(){
  try{
await mongoose.connect("mongodb+srv://Rithiga:Rithi14@cluster0.rkk0jjb.mongodb.net/pet?retryWrites=true&w=majority&appName=Cluster0");
console.log("db connnection success")
         const x= 4000;
         app.listen(x,function(){
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();


app.post('/addbeaches', async (req, res) => {
  try {
      const { image, name, description, price } = req.body;
      
      const beach = new BeachModel({
          image,
          name,
          description,
          price
      });
      await beach.save();
      res.status(201).json({ message: "Beaches added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/getallbeaches', async (req, res) => {
    try {
      const beaches = await BeachModel.find();
      res.json(beaches);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post('/addregisters', async (req, res) => {
    try {
        const { username, email, password, phone, address, city, state, country } = req.body;
        
        const beach = new RegisterModel({
            username,
            email,
            password,
            phone,
            address,
            city,
            state,
            country
        });
        await beach.save();
        res.status(201).json({ message: "Registerd successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });

  app.post('/addlogins', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const beach = new LoginModel({
            username,
            password,
        });
        await beach.save();
        res.status(201).json({ message: "Login successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });

  app.post('/addadopts', async (req, res) => {
    try {
        const { name, phone, address, state, city } = req.body;
        
        const bea = new AdoptModel({
          name,
          phone,
          address,
          state,
          city,
        });
        await bea.save();
        res.status(201).json({ message: "Adopted successfully Delieved Within three days to your address" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
 
 
 