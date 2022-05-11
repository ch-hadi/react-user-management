import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";

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
      existUser:'okno',
    },

    reducers :{

    },
    extraReducers: (builder)=>{
        builder.addCase(createAccount.fulfilled, (state , action)=>{
            const data = (action.payload)            

            state.users = [...state.users , data]
            // state.users.length == 0 ?  ( state.users = [...state.users , data]) : 

          //  (state.users?.filter((userEmail)=>{

          //   if (userEmail.email === data){

          //      console.log('matched')
          //   }
           
          //   return

          //  }))
          //  state.users = [...state.users , data]
            

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