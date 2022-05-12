import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";

import {useDispatch} from 'react-redux'

  export const createAccount = createAsyncThunk(
    'users/createAccount',

    async (data) => {


     return  data
    }
  )

  export const DeleteUser = createAsyncThunk(
    'users/deleteUser' , async(email)=>{

    
     return email

    }
  )

  
export const signUpSlice = createSlice({

    name: 'signUpSlice' ,

    initialState:{
      users:"", 
      
    },

    reducers :{

    },
    extraReducers: (builder)=>{
        builder.addCase(createAccount.fulfilled, (state , action)=>{
        
          let user = action.payload

        if (state.users.length == 0){

          state.users= [...state.users , user]
          console.log('in if statment')

        }
          state.users.filter((item)=>{

            if (item.email != user.email){

              state.users = [...state.users , user]
             
              return 
            }

            console.log('user exist')
            return
           
          })
        

        })
        builder.addCase(DeleteUser.fulfilled , (state , action)=>{
          
            let em = (action.payload)
             state.users = state.users?.filter((i)=>

                i.email !== action.payload
               

              )

            
        })

    }
})




export default signUpSlice.reducer