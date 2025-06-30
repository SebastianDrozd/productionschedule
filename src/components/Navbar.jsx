import styles from "../styles/Navbar.module.css"
import { Layout, Download, FileText } from 'lucide-react';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftcontainer}>
                <div className={styles.logolayout}>
                    <Layout className={styles.logo}/>
                </div>
                <div className={styles.logottext}>
                    <h1 className={styles.headertext}>Production Control</h1>
                    <p className={styles.headersub}>Bobak Production Schedule Line Management </p>
                </div>
            </div>
            <div className={styles.rightcontainer}>
                <div className={styles.lastupdated}>
                    <p className={styles.lasttitle}>LAST UPDATE</p>
                    <p className={styles.lastsub}>6/30/2025, 9:57:28am</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.pdfbutton}><FileText height={16} className={styles.innerlogo}/>PDF</button>
                    <button className={styles.logout}><Download  height={16}/>Logout</button>
                </div>
            </div>
        </div>
    )


}


export default Navbar;