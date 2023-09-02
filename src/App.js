import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SearchPage from './SearchPage/SearchPage';
import NavBar from './NavBar/NavBar';
import { createContext, useEffect, useState } from 'react';

const userContext=createContext()
function App() {
  const [inputData, setinpudData] = useState("")

  const [userData, setuserData] = useState([])

  useEffect(() => {
    async function apiFetch(){
      const response=await  axios.get(`https://api.github.com/users`);
      const res=await response.data
      setuserData(res)
      console.log(response)
    }
    apiFetch()
  }, [])
  return (
    <div className="App">
      <userContext.Provider value={[userData,setuserData,inputData,setinpudData]}>
      <NavBar/>
     <SearchPage />
     </userContext.Provider>
    </div>
  );
}

export default App;
export {userContext}
