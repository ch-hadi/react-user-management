import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";
// import {Token} from './../../Auth/Token'

  export const createAccount = createAsyncThunk(
    'users/createAccount',

    async (data) => {


      // const res = await Token.post('/create-user',data )
    
    //  const resData = res.data
    //  console.log('ok ok ok ....',data)
    // console.log('in thunk ...',data)
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
      users:""
    },

    reducers :{

    },
    extraReducers: (builder)=>{
        builder.addCase(createAccount.fulfilled, (state , action)=>{
            const data = (action.payload)             
            // void state.users.push(data)

            state.users = [...state.users , data]
            

        })
        builder.addCase(DeleteUser.fulfilled , (state , action)=>{
          
            let em = (action.payload)
             state.users = state.users?.filter((i)=>

                i.email !== action.payload
                // console.log('emails are ...',i.email)

              )

            // console.log('em....' , em)

            // state.users = state.users.map((i) =>{
            //   console.log('oooo' , i.email)
            // }
        })

    }
})




export default signUpSlice.reducer