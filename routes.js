const express =require('express');
const router=express.Router();
const db =require('./db');

router.post('/submit',(req,res)=>{const firstName= req.body.firstName;
    const lastName =req.body.lastName;
    const dateOfBirth =req.body.dateOfBirth;
const financialInformation=req.body.financialInformation;


db.run(`INSERT INTO customers(first_name, last_name, date_of_birth,financialInformation) VALUES (?,?,?,?)`,
[firstName,lastName,dateOfBirth,financialInformation],
(err)=>{if(err){console.error(err.message);}res.send('customer information saved successfully');
})
});


module.exports=router;