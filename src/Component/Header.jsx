import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar className='header-content'>

                <h1 className="title">Mui Application</h1>

                <div>

                    <Button color='inherit' component={Link} to='/login'>
                        Login
                    </Button>

                    <Button color='inherit' component={Link} to='/register'>Register</Button>

                </div>

            </Toolbar>
        </AppBar>
    )
}
