import React from 'react'
import styles from './styles/Box4.module.css'
import { StyledButtons } from './muiComponents'
import { Button } from '@mui/material'

export default function Box4() {
  return (
    <div className={styles.box4}>
        <h2>Boost your links today</h2>
        <Button data-testid="startbtn" variant='contained'>Get Started</Button>

    </div>
  )
}
