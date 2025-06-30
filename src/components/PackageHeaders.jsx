import styles from "../styles/headers/PackageHeader.module.css"
const PackageHeaders = () => {
    return (
        <div className={styles.container}>
            <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheader}>3</h1>
                    <p className={styles.cardsub}>Total Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dot}></div>
                </div>
            </div>
             <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheadergreen}>3</h1>
                    <p className={styles.cardsub}>Total Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dotgreen}></div>
                </div>
            </div>
             <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheaderorange}>3</h1>
                    <p className={styles.cardsub}>Total Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dotorange}></div>
                </div>
            </div>
             <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheadergrey}>3</h1>
                    <p className={styles.cardsub}>Total Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dotgrey}></div>
                </div>
            </div>
        </div>
    )   
}

export default PackageHeaders;