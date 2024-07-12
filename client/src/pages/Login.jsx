import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import {useFileHandler, useInputValidation} from '6pp'


import { VisuallyHiddenInput } from '../components/styles/StyledComponent'
import { usernameValidator } from '../utils/validators' 
import { gradientBg } from '../constants/color'

const Login = () => {

    const [isLogin, setIsLogin] = useState(true)
    const toggleLogin = () => setIsLogin((prev) => !prev)
    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("", usernameValidator)
    const password = useInputValidation("")
    const avatar = useFileHandler("single")

     const handleLogin = (e) => {
        e.preventDefault()
     }
     const handleSignUp = (e) => {
        e.preventDefault()
     }
    return (
        <div
        style={{
            backgroundImage: gradientBg,

        }}>

       
        <Container component={"main"} maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

            }}>
            <Paper
                elevation={3}
                sx={
                    {
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }
                }
            >

                {
                    isLogin ? (
                        <>
                            <Typography variant='h5'>
                                Login
                            </Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem"
                            }
                            }
                            onSubmit={handleLogin}
                            
                            >
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin='normal'
                                    variant='outlined'
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin='normal'
                                    variant='outlined'
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                <Button
                                    sx={{
                                        marginTop: "1rem"
                                    }}
                                    variant='contained' color="primary" type='submit' fullWidth
                                >Login

                                </Button>
                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button
                                    fullWidth
                                    variant='text'
                                    onClick={toggleLogin}
                                >
                                    Signup
                                </Button>

                            </form>
                        </>
                    ) : <>
                        <Typography variant='h5'>
                            Signup
                        </Typography>

                        <form
                            style={{
                                width: "100%",
                                marginTop: "1rem"
                            }
                            }
                            onSubmit={handleSignUp}
                        >
                            <Stack
                                position={'relative'}
                                width={"6rem"}
                                margin={"auto"}

                            >
                                <Avatar
                                    sx={{
                                        width: "6rem",
                                        height: "6rem",
                                        objectFit: "contain"
                                    }}
                                    src={avatar.preview}
                                />
                                     
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.7)",

                                        },

                                    }}
                                    component="label"
                                >
                                    <>
                                        <CameraAltIcon />
                                        <VisuallyHiddenInput type="file" 
                                        onChange={avatar.changeHandler}
                                         />
                                    </>
                                </IconButton>
                            </Stack>
                            {avatar.error && (
                                <Typography 
                                 m="1rem auto"
                                 width={"fit-content"}
                                 display={"block"}
                                 color="error"
                                  variant="caption">
                                {avatar.error}

                                </Typography>
                            )}
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                margin='normal'
                                variant='outlined'
                                value = {name.value}
                                onChange={name.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="Bio"
                                margin='dense'
                                variant='outlined'
                                value={bio.value}
                                onChange={bio.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="Username" 
                                margin='dense'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            {username.error && (
                                <Typography color="error" variant="caption">
                                {username.error}

                                </Typography>
                            )}
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                margin='dense'
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem"
                                }}
                                variant='contained' color="primary" type='submit' fullWidth
                            >Signup

                            </Button>
                            <Typography textAlign={"center"} m={".5rem"}>OR</Typography>
                            <Button  
                                fullWidth
                                variant='text'
                                onClick={toggleLogin}
                            >
                                Login
                            </Button>

                        </form>
                    </>
                }

            </Paper>
        </Container>
        </div>
    )
}

export default Login