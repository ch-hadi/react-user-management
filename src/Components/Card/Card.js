import React from 'react'
import { useDispatch } from 'react-redux'
import {DeleteUser} from '../../Pages/AddUser/store/addUserSlice'


const Card =(props)=> {
    const {firstName ,lastName  , email , UserName } = props
    const dispatch = useDispatch()
  return (
    <div class="flex justify-center mt-1">
    
    <div class="block rounded-lg shadow-lg bg-white w-full text-center">
      <div class="py-3 px-6 border-b border-gray-300">
      </div>
      <div class="p-6 flex justify-between items-center">
       <div className='text-start'>
       <h5 class="text-gray-900 text-xl font-medium mb-2">
         First Name : {firstName}
         </h5>
         <h5 class="text-gray-900 text-xl font-medium mb-2">
         Last Name : {lastName}
         </h5>
         <h5 class="text-gray-900 text-xl font-medium mb-2">
         Username : {UserName}
         </h5>
         <h5 class="text-gray-900 text-xl font-medium mb-2">
         Email : {email}
         </h5>
       {/* <h5 class="text-gray-900 text-xl font-medium mb-2">First Name : {firstName}</h5> */}
       </div>
        <button onClick={()=>{dispatch(DeleteUser(email))}} type="button" class="w-20 h-10 text center bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
      </div>
    </div>
  </div>
  )
}

export default Card