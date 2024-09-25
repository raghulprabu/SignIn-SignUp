import { Button, Container, Paper, TextField, Typography, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Oauth from './Oauth'

export default function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
        
        const [showPassword , setPassword]= useState(false)
        const handleClickShowPassword = () => {
          setPassword(prev => !prev)
      }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <Container maxWidth="xs">
      <Paper className="login" elevation={3}>
        <img className="images" src='./user.png' alt='login' />
        <Typography variant='h4' align='center' gutterBottom>
          Login
        </Typography>
        <form className='forms' onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="Emailtext"
            label='Email'
            type='email'
            variant='outlined'
            fullWidth
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ''}
          />
          <FormControl sx={{ marginBottom: '16px', width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Password'
                            variant='outlined'

                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },

                            }
                            )}
                            error={Boolean(errors.password)}
                            helperText={errors.password ? errors.password.message : ''}
                        />
                    </FormControl>
          <Button
            className="Passbutton"
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>
        <div>
            <Link to="/register" className="link">
              Don't have an account? Register
            </Link>
        </div>
      </Paper>
    </Container>
        <Oauth/>
  </>
  );
}



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css';

// export default function Login() {

  



//   return (
//     <Container maxWidth="xs">
//       <Paper className="login" elevation={3}>
//         <img className="images" src='./user.png' alt='login' />
//         <Typography variant='h4' align='center' gutterBottom>
//           Login
//         </Typography>
//         <form className='forms'>
//           <TextField
//             className="Emailtext"
//             label='Email'
//             type='email'
//             variant='outlined'
//             fullWidth
//             value={email}
//             onChange={handleEmailChange}
//             error={Boolean(emailError)}
//             helperText={emailError}
//           />
//           <TextField
//             className="Emailtext"
//             label='Password'
//             variant='outlined'
//             fullWidth
//             type='password'
//             value={password}
//             onChange={handlePasswordChange}
//             error={Boolean(passwordError)}
//             helperText={passwordError}
//           />
//           <Button
//             className="Passbutton"
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//           >
//             Login
//           </Button>
//         </form>
//         <Grid2 container justifyContent="center">
//           <Grid2 item>
//             <Link to="/register" className="link">
//               Don't have an account? Register
//             </Link>
//           </Grid2>
//         </Grid2>
//       </Paper>
//     </Container>
//   );
// }

