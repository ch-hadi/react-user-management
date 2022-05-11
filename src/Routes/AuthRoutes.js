import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Main from '../Pages/Main/Main'


function AuthRoutes() {
  return (<>

    <Routes>
        {/* <Route path='/login' element={<SignIn />}/> */}
        {/* <Route path='/create-account' element={<SignUp />}/> */}
        <Route path='/' element={<Main/>}/>
    </Routes>
    
   </>
  )
}

export default AuthRoutes