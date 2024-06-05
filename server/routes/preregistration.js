const express = require('express');
const router = express.Router();
const preregistrationmodel=require('../models/preregistrationmodel')
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'iitjguesthouse@gmail.com',
      pass: 'yfeaofygjkudhifc'
    }
});
router.get('/get',async (req,res)=>{
    const alldetails=await preregistrationmodel.find();
    return res.status(200).json({alldetails});
})
router.post('/',async (req,res)=>{
    const {name,email,number,college}=req.body;
    const emailexists =await preregistrationmodel.findOne({email});
    if (emailexists){
        return res.status(400).json({message:"Email already exists"})
    }
    const newregistration =new preregistrationmodel({name,email,number,college})
    await newregistration.save()
    // var mailOptions={
    //     to: email,
    //    subject: "Varchas'23 Pre-registration  ",
    //    html: "<h3>Congratulations! You have Pre Registered Successfully. We will contact you soon </h3>"
    //  };
     
    //  transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);   
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //     res.render('otp');
    // });
    return res.status(200).json({"Info":newregistration})
})

module.exports=router;