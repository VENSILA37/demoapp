const express = require('express')
const app = express()
const mysql =require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(cors());

  const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'project'
  })

app.post ('/create',(req, res)=>{
    const firstname =req.body.firstname
    const lastname = req.body.lastname 
    const location = req.body.location
    const email = req.body.email
    const dob = req.body.dob
    const education = req.body.education

db.query(
    'insert into project.employees (firstname,lastname,location,email,dob,education)VALUES(?,?,?,?,?,?)',
    [firstname,lastname,location,email,dob,education],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send('values inserted')
        }
        }
)
    })

 app.get('/employees',(req,res) => {
   db.query(
    'select * from project.employees',(err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }
   )
 })   

 app.delete('/api/remove/:id',(req,res) =>{
    const {id}= req.params;
    const sqlRemove =
    "DELETE FROM employees WHERE id = ?";
    db.query( sqlRemove,id, (error,result) => {
    if(error){
        console.log(error)

    }
}
    )
 })

 
 

 app.get('/edit/:id', (req, res) => {
    const sql = "SELECT * FROM employees WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err,  result) => {
        if(err) return res.json({Error: err});
        return res.json(result);
    })
 })

 app.put('/update/:id', (req,res) => {
    const sql = "UPDATE employees SET `firstname` = ?,`lastname` = ?, `location` = ?, `email` = ?,`dob` = ?,`education` = ? WHERE ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.firstname, req.body.lastname,req.body.location,req.body.email,req.body.dob,req.body.education, id], (err, result) => {
        if(err) return res.json("Errror");
        return res.json({result})
    })
 })
app.listen(3001,() => {
    console.log('Backend server is running')
})