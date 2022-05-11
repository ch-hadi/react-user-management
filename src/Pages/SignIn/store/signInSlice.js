import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";



const initialState ={
  userStatus : false
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
            
          
             state.userStatus = action.payload 

            })
           
            builder.addCase(Logout.fulfilled , (state , action)=>{

            state.userStatus= action.payload.userStatus

            })
    
    }



})



export default signInSlice.reducer