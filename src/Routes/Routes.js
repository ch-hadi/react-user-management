// import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Routes , Route} from 'react-router-dom'
import SignIn from '../Pages/SignIn/SingIn'
import AddUser from '../Pages/AddUser/AddUser'
import Main from '../Pages/Main/Main'
import IdleTimeOutHandler from '../Components/Timer/IdleTimeOutHandler'
function AllRoutes() {

  const emailStatus = useSelector((state)=>state.persistedReducer.signInReducer.userStatus)
  
// useEffect(() => {
 
// }, [emailStatus])

  return (<>

   
      {
        emailStatus === false ?   <Routes>
        <Route path='/login' element={<SignIn />}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes> : <Routes>
        <Route path='/*' element={<Main/>}/>
        <Route path='/add-user' element={<AddUser />}/>

    </Routes>
    
      }
     
   </>
  )
}

export default AllRoutes


const NotFound =()=>{

  return (
    <div className='h-screen w-full bg-red-700 text-center text-white text-4xl items-center flex justify-center'>
     <div>
     <h1>You are not Athunticated so route not found...</h1>
      <h1 className='my-5'> - Or - </h1>
      <h2>Route not Found !</h2>
      <div className='mt-9'> 
      <a href='/login' className='bg-yellow-600 py-3 text-small px-10 text-black'>Login</a>
      </div>
      </div>
    </div>
  )
}