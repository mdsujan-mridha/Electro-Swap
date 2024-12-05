
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useInputValidation, useFileHandler, useStrongPassword } from "6pp"
import { BiCamera } from 'react-icons/bi';
import { VisuallyHiddenInput } from '../styles/StyledComponent';
import { userEmailValidator } from '../utils/Validator';
import { bgGradient } from '../utils/Constant';

const Login = () => {
    //  state 
    const [isLogin, setIsLogin] = useState(true);
    const name = useInputValidation("");
    const email = useInputValidation("", userEmailValidator);
    const password = useStrongPassword("")
    const avatar = useFileHandler("single");
    // toggleLogin
    const toggleLogin = () => {
        setIsLogin(prev => !prev)
    }
    return (
        <div className='min-h-screen' style={{ backgroundImage: bgGradient }}>
            <Container
                component={"main"}
                maxWidth={"xs"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh"
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    {
                        isLogin ?
                            (<><Typography variant='h4'> Login </Typography>
                                <form
                                    style={{
                                        width: "100%",
                                        marginTop: "1rem"
                                    }}
                                >
                                    <TextField
                                        required
                                        label="Email"
                                        fullWidth
                                        margin="normal"
                                        value={email.value}
                                        onChange={email.changeHandler}

                                    />
                                    {
                                        email.error && <Typography variant='caption' color='error'>{email.error}</Typography>
                                    }
                                    <TextField
                                        required
                                        label="Password"
                                        fullWidth
                                        margin="normal"
                                        value={password.value}
                                        onChange={password.changeHandler}

                                    />
                                    {
                                        password.error && <Typography variant='caption' color='error'>{password.error}</Typography>
                                    }
                                    <Button
                                        sx={{
                                            marginTop: "1rem"
                                        }}
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type='submit'
                                    > Login </Button>

                                    <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                                    <Button fullWidth variant='text' onClick={toggleLogin}>
                                        Sign up Instead
                                    </Button>
                                </form></>)
                            :
                            (<>
                                <Typography variant='h4'> Register </Typography>
                                <form
                                    style={{
                                        width: "100%",
                                        marginTop: "1rem"
                                    }}
                                >
                                    <Stack position={"relative"} width={"10rem"} margin={"auto"}>

                                        <Avatar

                                            sx={{
                                                width: "10rem",
                                                height: "10rem",
                                                objectFit: "cover"
                                            }}
                                        />
                                        <IconButton sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: "0",
                                            color: "white",
                                            bgcolor: "rgba(0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0.7)",
                                            }
                                        }} component={"label"} >
                                            <BiCamera />
                                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                                        </IconButton>
                                    </Stack>
                                    <TextField
                                        required
                                        label="Username"
                                        fullWidth
                                        margin="normal"
                                        value={name.value}
                                        onChange={name.changeHandler}

                                    />
                                    <TextField
                                        required
                                        label="Email"
                                        fullWidth
                                        margin="normal"
                                        value={email.value}
                                        onChange={email.changeHandler}

                                    />
                                    {
                                        email.error && <Typography variant='caption' color='error'>{email.error}</Typography>
                                    }
                                    <TextField
                                        required
                                        label="Password"
                                        fullWidth
                                        margin="normal"
                                        value={password.value}
                                        onChange={password.changeHandler}

                                    />
                                    {
                                        password.error && <Typography variant='caption' color='error'>{password.error}</Typography>
                                    }
                                    <Button
                                        sx={{
                                            marginTop: "1rem"
                                        }}
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type='submit'
                                    > Sign up </Button>

                                    <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                                    <Button fullWidth variant='text' onClick={toggleLogin}>
                                        Login Instead
                                    </Button>
                                </form></>
                            )
                    }
                </Paper>
            </Container>
        </div >
    );
};
export default Login;