// import React from 'react';
import {useState} from 'react';
import validator from 'validator';
import PasswordMask from 'react-password-mask';
import './Form.css';

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [conpassword, setConfirmPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [usernameError, setUserNameError] = useState('')
  const [passwordError, setPassError] = useState('')
  const [conPassError, setConPassError] = useState('')
  const [websiteError, setWebsiteError] = useState('')
  const [comp, isComplete] = useState(false)
  const [title, setTitle] = useState('Profile Form - All fields required')
  const[title2, setTitle2] = useState('')

  
  let numFilled = 0
  
  function handleSubmit(e) {
    e.preventDefault()
    if (validator.isEmpty(name)) {
      setNameError('- Cannot be blank')
      isComplete(false)

    } else {
      setNameError('')
      numFilled = numFilled + 1
      complete()
    }

    if (!validator.isEmail(email)) {
      setEmailError('- Must be a valid email')
      isComplete(false)

    } else {

      setEmailError('')
      numFilled = numFilled + 1
      complete()

    }

    if (validator.isEmpty(username)) {
      setUserNameError('- Cannot be blank')
      isComplete(false)

    } else {
      setUserNameError('')
      numFilled = numFilled + 1
      complete()

    }

    if (validator.isEmpty(password)) {
      setPassError('- Cannot be blank')
      isComplete(false)

    } else {
      setPassError('')
      numFilled = numFilled + 1
      complete()

    }
    if (!validator.isURL(website) ) {
      setWebsiteError('- Must be a valid website')
      isComplete(false)

    } else {
      setWebsiteError('')
      numFilled = numFilled + 1
      complete()
    }

    if (password !== conpassword || validator.isEmpty(password)) {
      setConPassError('- Must match the password')
      isComplete(false)

    } else {
      setConPassError('') 
      numFilled = numFilled + 1
      complete()

    }
    console.log(numFilled)

  }


function handleErrorLabel(error){
  return error  !== '' ? "label-red" : ""
}

function handleErrorInput(err){
  return err ? "borderRed" : "borderWhite"
}

function complete() {
  debugger
  if (numFilled === 6) {
    isComplete(true)
    setTitle('Thank You!')
    setTitle2('Your profile has been successfully updated - NOT!')
    console.log(numFilled, isComplete)
  }

}
  return (
    <div className= "fInput" onSubmit ={handleSubmit}>
      <h1>{title}</h1>
      <p>{title2}</p>
      <form id = "myForm" className = {comp ? "displayNone" : ""}>
        <label 
            htmlFor = "name" 
            className ={handleErrorLabel(nameError)}>Name {nameError}</label>
        <input id = "name" type="text" className = {handleErrorInput(nameError)}
              onChange = {(e) => setName(e.target.value)} 
        /> 
        <label htmlFor = "email"
          className ={handleErrorLabel(emailError)}>Email {emailError}</label>
        <input id = "email"
              type="text" className ={handleErrorInput(emailError)} 
              onChange = {(e) => setEmail(e.target.value)}
        /> 
        <label htmlFor = "username"
          className ={handleErrorLabel(usernameError)}>Username {usernameError}</label>
        <input id = "username"
              type="text" 
              className = {handleErrorInput(usernameError)}
              onChange = {(e) => setUserName(e.target.value)}
        /> 
        <label 
              htmlFor = "password"
              className ={handleErrorLabel(passwordError)}>Password {passwordError}</label>
        <PasswordMask id = "pass" 
              value ={password} 
              className = {passwordError ? "borderPassword" : "btnClass"} 
              onChange ={(e) => setPassword(e.target.value)}
              buttonClassName ="btnShow"
        />
        <label htmlFor = "con-password"
              className ={handleErrorLabel(conPassError)}>Confirm Password {conPassError}</label>
        <PasswordMask 
              id = "conPass"
              value ={conpassword} 
              onChange = {(e) => setConfirmPassword(e.target.value)} 
              buttonClassName ="btnShow"
              className = {conPassError ? "borderPassword" : "btnClass"} 
        /> 
        <label htmlFor = "website"
              className ={handleErrorLabel(websiteError)}>Website {websiteError}</label>
        <input id ="website"
          type="text" 
              className = {handleErrorInput(websiteError)}
              onChange = {(e) => setWebsite(e.target.value)} 
        /> 
              <button type = "submit" className = "submit">Submit</button>

      </form>
    </div>
  )
}