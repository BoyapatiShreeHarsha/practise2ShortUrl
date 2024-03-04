import React from 'react'
import styles from './styles/Card.module.css'

export default function Card({img="",head="",text="",pos="10px"}) {
  return (
    <div className={styles.body} style={{top:pos}}>
        <div className={styles.img}>
      <img src={img} alt='icon'/>
      </div>
      <div className={styles.text}>
        <p className={styles.head}>{head}</p>
        <p className={styles.textBody}>{text}</p>
      </div>
    </div>
  )
}
