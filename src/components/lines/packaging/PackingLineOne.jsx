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
    const [products,setProducts] = useState([{
            productCode : "",
            productionEntry : "",
            tooling : "",
            block : ""
        }])

    const handleProductSelect = (event,index) => {
        const updatedProducts = products
        console.log("this is current product",updatedProducts[index])
        if (event.key === "Enter") {
            for (const x of data) {
                if (x.product == productCode) {
                    updatedProducts[index].description = x.description;
                }
            }
        }
    }
    const handleAddProducts = () => {
        const product = {
            productCode : "",
            productionEntry : "",
            tooling : "",
            block : ""
        }
        setProducts([...products,product])
    }

    const handleProductionEntry = (e,index) => {
        const updatedProducts = products;
        updatedProducts[index].productionEntry = e.target.value
        setProducts(updatedProducts)
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
            {wantsEdit ?<> <div className={styles.editouter}>
                {products && products.map((product,index) => (<div key={index} className={styles.editcontainer}>
                    <h3 className={styles.editheader}>Product {index + 1}</h3>
                    <div className={styles.inputrow}>
                        <div>
                            <p className={styles.editsub}>Product Code</p>
                            <input placeholder="Enter product code" className={styles.productinput} onKeyDown={(e) => handleProductSelect(e, index)} onChange={(e) => { setProductCode(e.target.value) }} />
                        </div>
                        <div>
                            <p className={styles.editsub}>production Entry</p>
                            <input placeholder="Enter production entry" className={styles.productinput} onChange={(e) => { handleProductionEntry(e,index) }} />
                        </div>
                    </div>

                    <p className={styles.editsub}>Description</p>
                    <div className={styles.descriptiondiv}>
                        {product.description}
                    </div>
                    <div className={styles.inputrow}>
                        <div>
                            <p className={styles.editsub}>Tooling</p>
                            <input placeholder="Enter Tooling" className={styles.productinput} onKeyDown={handleProductSelect} onChange={(e) => { setProductCode(e.target.value) }} />
                        </div>
                        <div>
                            <p className={styles.editsub}>Block</p>
                            <input placeholder="Enter block" className={styles.productinput} onKeyDown={handleProductSelect} onChange={(e) => { setProductCode(e.target.value) }} />
                        </div>
                    </div>
                </div>))}
                
                <div className={styles.addbuttondiv}>
                    <button onClick={handleAddProducts} className={styles.addbtn}>Add Product</button>
                </div>
               
            </div>
             <div className={styles.buttonrow}>
                    <button className={styles.savebtn}>SAVE CONFIG</button>
                    <button onClick={() => {setWantsEdit(false)}} className={styles.cancelbtn}>CANCEL</button>
                </div>
            </>
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