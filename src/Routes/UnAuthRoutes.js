import React from 'react'
import {Routes , Route} from 'react-router-dom'
import SignIn from '../Pages/SignIn/SingIn'
import SignUp from '../Pages/SignUp/SignUp'

function UnAuthRoutes() {
  return (<>

    <Routes>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/create-account' element={<SignUp />}/>
        {/* <Route path='/' element={<Main/>}/> */}
    </Routes>
    
   </>
  )
}

export default UnAuthRoutes