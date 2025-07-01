"use client"
import { useState } from "react";
import styles from "../../../styles/lines/packaging/PackingLineOne.module.css"
import { Edit, Settings, Power, AlertTriangle, Package, Factory, Blend, Plus, Trash2 } from 'lucide-react';


const PackingLineOne = () => {

    const data = [
        {
            product: "28070",
            description: "Aldi Cocktails 5-1/12lb 6 Inch Length"
        },
        {
            product: "28171",
            description: "Jessie Jones Retail Pack 10-20 Inch Length"
        },
        {
            product: "28644",
            description: "Bahama Mama sample test test"
        }
    ]
    const [wantsEdit, setWantsEdit] = useState(false)
    const [description, setDescription] = useState("")
    const [productCode, setProductCode] = useState("")
    const [products, setProducts] = useState([{
        productCode: "",
        description: "",
        productionEntry: "",
        tooling: "",
        block: ""
    }])

    const handleProductSelect = (event, index) => {
        const value = event.target.value;
        const match = data.find(x => x.product === value);

        const updatedProducts = [...products];
        updatedProducts[index] = {
            ...updatedProducts[index],
            productCode: value,
            description: match ? match.description : "" // or leave unchanged if you prefer
        };

        setProducts(updatedProducts);
    };
    const handleAddProducts = () => {
        const product = {
            productCode: "",
            description: "",
            productionEntry: "",
            tooling: "",
            block: ""
        }
        setProducts([...products, product])
    }

    const handleProductionEntry = (e, index) => {
        const updatedProducts = [...products]
        updatedProducts[index].productionEntry = e.target.value
        setProducts(updatedProducts)
    }

    const handleTooling = (e, index) => {
        const updatedProducts = [...products]
        updatedProducts[index].tooling = e.target.value;
        setProducts(updatedProducts)

    }
    const handleBlock = (e, index) => {
        const updatedProducts = [...products]
        updatedProducts[index].block = e.target.value;
        setProducts(updatedProducts)
    }

    const handleSaveConfig = () => {
        console.log(products)
        setWantsEdit(false)
    }


    return (
        <div className={styles.cardcontainer}>
            <div className={styles.cardheader}>
                <div className={styles.cardleft}>
                    <div className={styles.cardlogo}>
                        <h2 className={styles.logotext}>1</h2>
                    </div>
                    <div className={styles.textdiv}>
                        <h2 className={styles.textheader}>LINE 1</h2>
                        <p className={styles.textsub}>OFFLINE</p>
                    </div>
                </div>
                <div className={styles.cardright}>
                    <div className={styles.alertriangle}><AlertTriangle /></div>
                    <div onClick={() => { setWantsEdit(!wantsEdit) }} className={styles.editbutton}><Edit /></div>
                </div>
            </div>
            {wantsEdit ? <> <div className={styles.editouter}>
                {products && products.map((product, index) => (<div key={index} className={styles.editcontainer}>
                    <h3 className={styles.editheader}>Product {index + 1}</h3>
                    <div className={styles.inputrow}>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>Product Code</p>
                            <input placeholder="Enter product code" value={product.productCode} className={styles.productinput} onChange={(e) => handleProductSelect(e, index)} />
                        </div>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>production Entry</p>
                            <input placeholder="Enter production entry" value={product.productionEntry} className={styles.productinput} onChange={(e) => { handleProductionEntry(e, index) }} />
                        </div>
                    </div>

                    <p className={styles.editsub}>Description</p>
                    <div className={styles.descriptiondiv}>
                        {product.description}
                    </div>
                    <div className={styles.inputrow}>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>Tooling</p>
                            <input placeholder="Enter Tooling" className={styles.productinput} value={product.tooling} onChange={(e) => { handleTooling(e, index) }} />
                        </div>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>Block</p>
                            <input placeholder="Enter block" className={styles.productinput} value={product.block} onChange={(e) => { handleBlock(e, index) }} />
                        </div>
                    </div>
                </div>))}

                <div className={styles.addbuttondiv}>
                    <button onClick={handleAddProducts} className={styles.addbtn}>Add Product</button>
                </div>

            </div>
                <div className={styles.buttonrow}>
                    <button onClick={handleSaveConfig} className={styles.savebtn}>SAVE CONFIG</button>
                    <button onClick={() => { setWantsEdit(false) }} className={styles.cancelbtn}>CANCEL</button>
                </div>
            </>
                : products.length > 1 ?
                    <div className={styles.displayouterdiv}>
                        {products.map((product,index) =>
                        (<div key={index} className={styles.displayitem}>
                            
                        </div>))}

                    </div>
                    :
                    <div className={styles.cardbody}>
                        <div className={styles.bodysymbol}>
                            <AlertTriangle height={35} width={35} />
                        </div>
                        <div className={styles.symboltitle}>
                            <p>LINE OFFLINE</p>
                        </div>
                        <div className={styles.symbolsub}><p>Click Edit to configure packaging line</p></div>
                    </div>}

        </div>
    )
}


export default PackingLineOne;