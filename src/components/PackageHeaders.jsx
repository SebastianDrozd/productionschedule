import styles from "../styles/headers/PackageHeader.module.css"
const PackageHeaders = ({headersContent}) => {
      const uniqueProducts = new Set();
      const uniqueLines = new Set();
  headersContent?.forEach((item) => {
    if (item?.ProductCode) {
      uniqueProducts.add(item.ProductCode);
      uniqueLines.add(item.Line)
    }
  });
  console.log("unique prouducts",uniqueProducts)

  console.l
    return (
        <div className={styles.container}>
            <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheader}>6</h1>
                    <p className={styles.cardsub}>Total Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dot}></div>
                </div>
            </div>
             <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheadergreen}>{uniqueLines.size}</h1>
                    <p className={styles.cardsub}>Active Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dotgreen}></div>
                </div>
            </div>
             <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheaderorange}>{uniqueProducts.size}</h1>
                    <p className={styles.cardsub}>Total Products</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dotorange}></div>
                </div>
            </div>
             <div className={styles.totalcard}>
                <div className={styles.left}>
                    <h1 className={styles.cardheadergrey}>{6 - uniqueLines.size}</h1>
                    <p className={styles.cardsub}>IDle Lines</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.dotgrey}></div>
                </div>
            </div>
        </div>
    )   
}

export default PackageHeaders;