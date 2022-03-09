import React from 'react'
import { useState } from 'react';

export default function Localstorage() {

    function addtolocalstorage() {
        localStorage.setItem('username', username)
    }
 const [username, setusername] = useState('')









    return (
        <div>
        <input type="text" placeholder="text" value={username} onChange={(e)=>{setusername(e.target.value)}} />

        <button onClick={addtolocalstorage}>Add</button>
        </div>
    )
}
