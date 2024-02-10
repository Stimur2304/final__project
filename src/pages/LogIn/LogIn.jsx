import React from 'react'
import{useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"
import { showInfoBack } from '../../utils/logInAlert';
import "./LogIn.css"

const LogInPage = () => {

  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
    showInfoBack()
  }
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset 
  } = useForm({mode:"onChange"})

  return (
    <div className="LogIn-div">
      <h1 className='header'>Sign in </h1>

      <div className='important'>
      <form onSubmit={handleSubmit(null)}>
        <input  {...register('username', {
          required:"Name can not be empty",
          minLength: {
          value:5,
          message:"You have to use more than 4 symblos"
          },
          maxLength:{
          value:18,
          message:"You must not use more than  18 symbols"
          }
        })} 
        
        type="text"   
        placeholder='Put your login' 
        className='input' 
        />
        {errors?.username&& 
        
        (<div>{errors.username.message}</div>)
        }

        <input 
        {...register('password', {
          required:"Password can not be empty",
          minLength: {
          value:5,
          message:"You have to use more than 4 symblos"
          },
         
        })} 

        type="password"  
        placeholder='Put your password' 
        className='input '  
        />
        {errors?.password&& 
        
        (<div>{errors.password.message}</div>)
        }


        
        <button onClick={()=> goHome()}>Log in</button>
      </form>
      </div>
    </div>
  );
 }

export default LogInPage;