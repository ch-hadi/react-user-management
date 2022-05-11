import React , {useState}from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAccount } from './store/addUserSlice';
import {useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function AddUser() {


    const [userData1, SetUserData] = useState('');
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const existedUser = useSelector((state)=>state.persistedReducer.AddUserReducer.existUser)

   
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        if (data.get('firstName') === '') {

            toast("Please fill firstname")
        }
        if (data.get('email') === '') {

            toast("Please fill Email")
            // return
        }
        if ((data.get('password') !== data.get('conformPassword')) || (data.get('password') === '' || data.get('conformPassword') === '')) {

            toast("Password did't matched/field empty ")
            return
        }

        const userData = {

            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            UserName:data.get('username'),
            password: data.get('password'),
            id:uuidv4()
        };
        
        // console.log(userData)
       dispatch(createAccount(userData))

       console.log('Exist....' ,existedUser)

       reset()
           
    };

    const reset = () =>{

        const userDataS = {

            firstName: '',
            lastName: '',
            email: '',
            UserName:'',
            password: '',
            conformPassword: '',
        };
        SetUserData(userDataS)

    }
       
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AiOutlineUsergroupAdd />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Users
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    
                                    autoFocus
                                    // value={userData1.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    // value={userData1.lastName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    // value={UserNamr}
                                    autoComplete="username"
                                    // value={userData1.UserName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    // value={userData1.email}
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    // value={userData1.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="conformPassword"
                                    label="Conform Password"
                                    type="password"
                                    id="conform-password"
                                    autoComplete="new-password"
                                    // value={userData1.conformPassword}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add User
                        </Button>
                       
                    </Box>
                    <ToastContainer />
                </Box>
                <Copyright sx={{ mt: 5 }} />

            </Container>
        </ThemeProvider>
    );
}