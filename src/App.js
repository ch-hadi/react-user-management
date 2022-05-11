import React , {useState} from 'react'
import './App.css';
import AllRoutes from './Routes/Routes';

function App() {

  
  const[isActive,setIsActive]=useState(true)
  const[isLogout,setLogout]=useState(false)


  return (
    <div className="App">
      <AllRoutes/>
     
    </div>
  );
}

export default App;
