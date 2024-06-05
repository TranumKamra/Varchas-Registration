import React, { useState, useEffect } from 'react'
import image from '../assets/images/logo.png'
import screen from '../assets/images/mvimg.png'
import axios from 'axios'
import './form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [college,setCollege] = useState('')
    const [email,setEmail] = useState('')

    const sendData = async()=>{
        if(name!=='' && number!=='' && email!=='' && college!==''){
        try {
            const response = await axios.post('https://varchaspreregistration.onrender.com/pre-registration',{name,email,number,college});
              console.log(response)
              setName('')
              setNumber('')
              setCollege('')
              setEmail('')
              toast.success("Pre-Registration Successful!");

            } catch (err) {
            console.log(err.response.data.message)
            toast.error("Email already exists!")
            }}
    }
    
  return (
    <>
        <div className='formsection'>
            <div className='section-content'>
                <img src={image} alt="" className='varchas-logo'/>
            </div>

            <div className='logos-carousel'>
                <div className='logo-slider'>
                    <img src={screen} alt="" className='carousel-logo'/>
                </div>
                
                <div className='logo-slider'>
                    <img src={screen} alt="" className='carousel-logo'/>
                </div>

                <div className='logo-slider'>
                    <img src={screen} alt="" className='carousel-logo'/>
                </div>
            </div>

            <div className='main-form'>
                <div className='form-container'>
                    <div className='form-text'>
                        <h2 className='form-heading1'>
                            pre-registration
                        </h2>
                    </div>
                    <div className='form-input-space'>
                        <input className="from-input-space" required="" autocomplete="off" name="text" placeholder="Full Name" type="text" value={name} onChange={(e)=>setName(e.target.value)} id='name'/>
                    </div>

                    <div className='form-input-space'>
                        <input className="from-input-space" required="" autocomplete="off" name="text" placeholder="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id='email'/>
                    </div>

                    <div className='form-input-space'>
                        <input className="from-input-space" required="" autocomplete="off" name="text" placeholder="Contact Number" type="text" onChange={(e)=>setNumber(e.target.value)} id='phone_number' value={number}/>
                    </div>

                    <div className='form-input-space'>
                        <input className="from-input-space" required="" autocomplete="off" name="text" placeholder="College Name" type="text"value={college} onChange={(e)=>setCollege(e.target.value)} id='college_name'/>
                    </div>

                    <div className='formbuttonbox'>
                        <button onClick={()=>sendData()} className='formbutton'> 
                            Pre-Pregister Now
                        </button>
                        <ToastContainer />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Form
