import ProductionLine from "@/components/lines/production/ProductionLine";
import styles from "../styles/tabs/ProductionTab.module.css"
const ProductionTab = () => {
    return (
         <div className={styles.container}>
          
            <div className={styles.linecontainer}>
                <ProductionLine line = {1}/>
                <ProductionLine line = {2}/>
                <ProductionLine line = {3}/>
                <ProductionLine line = {4}/>
                <ProductionLine line = {5}/>
                <ProductionLine line = {6}/>
                <ProductionLine line = {7}/>
            </div>
        </div>
    )
}

export default ProductionTab;