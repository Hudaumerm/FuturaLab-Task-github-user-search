import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import SearchPage from '../SearchPage/SearchPage'
import { useContext } from 'react'
import { userContext } from '../App'
import './SearchBar.css'
function SearchBar() {
    const [userData,setuserData]=useContext(userContext)
    const [inputData, setinputData] = useState("")
    const [first, setfirst] = useState(false)

    const handleChange=(e)=>{
        setinputData(e.target.value)
        console.log("input="+inputData)

        if(e.target.value===""){
            setuserData(userData)
        }

       
    }
    const SearchClick=()=>{
   
        const filteredValues=userData.filter((item)=>
         item.login.toLocaleLowerCase().indexOf(inputData.toLocaleLowerCase()) !== -1) 
         setuserData(filteredValues)
         console.log(filteredValues)
         if(filteredValues.length===0 && first===false){
            setfirst(true)
            window.alert(`${inputData} not found`)
           
         }
         else{
            setfirst(false)
         }
      
     }
     
    

  return (
    <div className='searchBar'>
    <div>
        <input type="text" placeholder='Search...' name="search" value={inputData} onChange={handleChange} />
        <button onClick={SearchClick}>Search</button>
        
    </div>
</div>
  )
}

export default SearchBar