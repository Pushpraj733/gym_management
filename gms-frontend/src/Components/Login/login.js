import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
const Login = () => {
  const [loginField,setLoginField]=useState({"userName":"","password":""});
  const navigate=useNavigate();
  const handleLogin= async()=>{
  // sessionStorage.setItem("isLogin",true);
  // navigate('/dashboard')
  await axios.post('https://gym-management-9zrp.onrender.com/auth/login',loginField,{withCredentials:true}).then((response)=>{

    console.log(response.data);
    localStorage.setItem('gymName',response.data.gym.gymName);
    localStorage.setItem('gymPic',response.data.gym.profilePic);
    localStorage.setItem('isLogin',true);
    localStorage.setItem('token',response.data.token);
    
    navigate('/dashboard')
  }).catch(err=>{
    const errorMessage=err.response.data.error
    // console.log(errorMessage)
    toast.error(errorMessage);
  }) 
  }
  const handleOnChange=(event,name)=>{
  setLoginField({...loginField,[name]:event.target.value});
  }
  return (
    <div className='w-1/3  p-10 mt-10 ml-20 bg-gray-50 bg-opacity-50 h-fit'>
<div className='font-sans text-indigo-800 text-center text-3xl font-bold p-4 shadow-md'>Welcome Back!<br></br>Login into your account</div>
<input value={loginField.userName} onChange={(event)=>{handleOnChange(event,"userName")}} type='text' className='w-full my-10 p-2 rounded-lg' placeholder='Enter username' />

<input value={loginField.password} onChange={(event)=>{handleOnChange(event,"password")}} type='password' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter password' />
<div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={()=>{handleLogin()}}>Login</div>
<ToastContainer/>
</div>
  )
}

export default Login