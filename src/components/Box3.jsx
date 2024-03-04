import React from 'react'
import styles from "./styles/Box3.module.css"
import Card from './Card'

let boxdata=[{
    img:"./images/icon-brand-recognition.svg",
    head:"Brand Recognition",
    text:"Boost your brand recognition with cach click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    pos:"0px"
},
{
    img:"./images/icon-detailed-records.svg",
    head:"Detailed Records",
    text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform bteer decisions.",
    pos:"30px"
},{
    img:"./images/icon-fully-customizable.svg",
    head:"Fully Customizable",
    text:"improve rand awareness and content discoverability through customizable links, supercharging audience engagement.",
    pos:"60px"
}]
export default function Box3() {

    return (
        <div className={styles.box3}>
            <div className={styles.text}>
                <h1 style={{ fontSize: "xxx-large", color: "#3D3B40" }}>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className={styles.mainbody}>
                <Card {...boxdata[0]}/>
                <div className={styles.strip}></div>
                <Card {...boxdata[1]}/>
                <div className={styles.strip}></div>
                <Card {...boxdata[2]}/>
            </div>
        </div>
    )
}
