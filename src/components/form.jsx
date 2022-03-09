import React from 'react'
import { useState } from 'react'

export default function Form() {
 const [username, setusername] = useState('')
    const [age, setage] = useState(8);


 function localstorage(){
    localStorage.setItem('username', username)
 }

 function values(event){
     event.preventDefault()
     var user = {
         username: username,
         age: age 
     }
     console.log(user);
 }

    return (
        <div>
            <form onSubmit={values}>
                <input type="text" placeholder="username" value={username} onChange={(e)=> {
                    setusername(e.target.value)
                }}/>
                <br/>
                <input type="text" placeholder="age" value={age} onChange={(e)=> {
                    setage(e.target.value)
                }}/>
                <br/>
                <br/>
                <button onClick={localstorage}>Click</button>
                <br/>
                <input type="submit" value="Submit"/>
                <p id="p">{localStorage.getItem('username')}</p>
            </form>
        </div>
    )
}


