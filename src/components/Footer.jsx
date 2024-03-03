import React from 'react'
import styles from "./styles/Footer.module.css"

export default function Footer() {
    return (
        <>
            <footer className={styles.footer} >
                <div style={{ flex: 1 }}>
                    <h2>Shortly</h2>
                </div>
                <div style={{ flex: 2, display: "flex", justifyContent: "space-between" }}>
                    <div className={styles.lists}>
                        <h4>Features</h4>
                        <p>Link Shartening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                    <div className={styles.lists}>
                        <h4>Resources</h4>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                    <div className={styles.lists}>
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div style={{ flex: 1, display: "flex", justifyContent: "space-between", marginLeft: "5px" }}>
                    <img src='./images/icon-facebook.svg' alt="" />
                    <img src="/images/icon-twitter.svg" alt="" />
                    <img src="/images/icon-pinterest.svg" alt="" />
                    <img src="/images/icon-instagram.svg" alt="" />

                </div>
            </footer>
        </>
    )
}
