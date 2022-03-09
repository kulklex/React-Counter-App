import React from 'react'
import { useState } from 'react'

export default function Maps() {
const [number, setnumber] = useState([0,1,2,3,4,,5,6,7,8,9])
const numbers = number.map((number)=>{
    return <p>{number}</p>
});
const [player, setplayer] = useState([
    {name: 'Hassan', age: 20, number:'seven'},
    {name: 'Hassan', age: 21, number:'seven'},
    {name: 'Hassan', age: 22, number:'seven'},
    {name: 'Hassan', age: 23, number:'seven'},
    {name: 'Hassan', age: 24, number:'seven'}
]);
const players = player.map((player)=> {
    return <div>
        <li>{player.name}</li>
        <li>{player.age}</li>
        <li>{player.number}</li>
        </div>
});


    return (
        <div>
            {numbers}

            {players}
            {
                (()=>{
                  if(true){
                     return (<div>
                      <p>true</p>
                        </div>)    
                  } else {
                      return (<div>
                          <p>false</p>
                      </div>)
                  }
                })()
            }
        </div>
    )
}
