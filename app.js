import express from 'express';


const app = express();

const PORT = 3001;

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=> {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

const appointments = [];
app.post("/submit", (req, res) =>{
   const appoint = {
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time
   }
   appointments.push(appoint);
});

app.get("/admin", (req, res)=>{
    res.send(appointments);
})
app.listen(PORT, ()=> {
    console.log(`Server is running at 
        http//:localhost:${PORT}`);
});

app.use(express.static('public'));