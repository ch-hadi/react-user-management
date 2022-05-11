import { getFormControlUnstyledUtilityClasses } from "@mui/base";
import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";

// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import  {Token} from '../../Auth/Token'


const initialState ={
  userStatus : false
  // token:localStorage.getItem('token') || null
}


export const signIn = createAsyncThunk(
    'users/signIn',

    async (Ob) => {

       return (Ob.user)
     
    }
  )

  export const Logout = createAsyncThunk(
    'users/logout',
    async () => {
      try {
       
       const data = {
         userStatus:false
       }
       return data
      
      } catch (error) {
          
        console.log(error)
          
      }
      
    }
  )


export const signInSlice = createSlice({

    name: 'signInSlice' ,
    initialState,
    reducers :{},
    extraReducers: (builder)=>{

        builder.addCase(signIn.fulfilled , (state , action)=>{
            
          // console.log('in Extra Reducer ... ' , action.payload)

             state.userStatus = action.payload 

            })
            //  Setting User in State
            builder.addCase(Logout.fulfilled , (state , action)=>{

            state.userStatus= action.payload.userStatus

            })
    
    }



})

// export const { submitData } = signInSlice.actions

export default signInSlice.reducer