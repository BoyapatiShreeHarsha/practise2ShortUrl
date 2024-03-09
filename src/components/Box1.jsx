import { Stack, Typography } from '@mui/material'
import { StyledButtons } from "./muiComponents"
import React from 'react'
import styles from './styles/Box1.module.css'

export default function Box1() {
    return (
        <Stack direction="row" spacing={25} sx={{marginLeft:"10%"}}>
            <div className={styles.text}>
                <h1 style={{fontSize:"xxx-large",color:"#3D3B40"}}>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                <StyledButtons data-testid="startbtn" variant="contained" >Get Started</StyledButtons>
            </div>
            <div className={styles.bgimg}>
                <img src="public/images/illustration-working.svg" alt="" style={{height:"100%"}}/>
            </div>
        </Stack>
    )
}
