import PackageHeaders from "@/components/PackageHeaders";
import styles from "../styles/tabs/PackageTab.module.css"
import PackingLineOne from "@/components/lines/packaging/PackingLineOne";
const PackageTab = () => {
    return (
        <div className={styles.container}>
           <PackageHeaders/>
            <div className={styles.linecontainer}>
            <PackingLineOne/>
            <PackingLineOne/>
            <PackingLineOne/>
            </div>
        </div>
    )
}

export default  PackageTab;