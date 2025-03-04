import React from 'react'
import Login from '../../Components/Login/login'
import SignUp from '../../Components/Signup/signUp'

const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
<div className=' border-2 bg-gradient-to-r from-indigo-500 via purple-500 to-pink-500 text-white p-5 font-extrabold text-xl text-center'>
    Welcome to Gym Management System
</div>
<div className='w-full bg-cover flex justify-center  h-[100%] bg-[url("https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114223.jpg?t=st=1741089644~exp=1741093244~hmac=ba342088969d438c0fa15c2c1c3fce49c87f5a379040ab325bb075b5d4ae23dc&w=1380")] ' >
<div className='w-full lg:flex gap-32 '>

<Login/>
<SignUp/>
</div>
</div>
  {/* Footer Section */}
  <footer className="bg-indigo-600 text-white text-center p-3 text-sm">
       All rights reserved | Connect us at gymmanagement34@gmail.com
      </footer>
    </div>
  )
}
//https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
export default Home