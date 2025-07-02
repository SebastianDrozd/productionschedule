"use client"
import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/lines/production/ProductionLine.module.css"
import { Edit, Settings, Power, AlertTriangle, Package, Factory, Blend, Plus, Trash2 } from 'lucide-react';
import { MyContext } from "@/util/MyContextProvider";

const ProductionLine = ({ line, savePackagingProduct, lineinfo }) => {
    const myContext = useContext(MyContext)
    console.log("this is line info in packagling line", lineinfo)
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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(lineinfo)
    }, [lineinfo])

    const handleProductSelect = (event, index) => {
        const value = event.target.value;
        const match = data.find(x => x.product === value);

        const updatedProducts = [...products];
        updatedProducts[index] = {
            ...updatedProducts[index],
            ProductCode: value,
            Description: match ? match.description : "" // or leave unchanged if you prefer
        };

        setProducts(updatedProducts);
    };
    const handleAddProducts = () => {
        const product = {
            ProductCode: "",
            Description: "",
            ProductionEntry: "",
            Tooling: "",
            Block: "",
            Date: myContext.date,
            Line: line,
            Department: "Packaging"
        }
        setProducts([...products, product])
    }

    const handleProductionEntry = (e, index) => {
        const updatedProducts = [...products]
        updatedProducts[index].ProductionEntry = e.target.value
        setProducts(updatedProducts)
    }

    const handleTooling = (e, index) => {
        const updatedProducts = [...products]
        updatedProducts[index].Tooling = e.target.value;
        setProducts(updatedProducts)

    }
    const handleBlock = (e, index) => {
        const updatedProducts = [...products]
        updatedProducts[index].Block = e.target.value;
        setProducts(updatedProducts)
    }

    const handleSaveConfig = () => {
        savePackagingProduct(products)
        setWantsEdit(false)
    }

    const handleDelete = (index) => {
        const updatedProducts = [...products]
        updatedProducts.splice(index, 1)
        setProducts(updatedProducts)
    }

    const handleWantsEdit = () => {
        setWantsEdit(!wantsEdit)
        if (products?.length == 0) {
            const product = {
                ProductCode: "",
                Description: "",
                ProductionEntry: "",
                Tooling: "",
                Block: "",
                Date: myContext.date,
                Line: line,
                Department: "Packaging"
            }
            setProducts([...products, product])
        }
    }


    return (
        <div className={styles.cardcontainer}>
            <div className={styles.cardheader}>
                <div className={styles.cardleft}>
                    <div className={styles.cardlogo}>
                        <h2 className={styles.logotext}>{line}</h2>
                    </div>
                    <div className={styles.textdiv}>
                        <h2 className={styles.textheader}>LINE {line}</h2>
                        <p className={styles.textsub}>{products?.length > 0 ? products?.length + " Products" : "Offline"}</p>
                    </div>
                </div>
                <div className={styles.cardright}>
                    {products?.length > 0 ? <div className={styles.powericon}><Power /></div> : <div className={styles.alertriangle}><AlertTriangle /></div>}
                    <div onClick={handleWantsEdit} className={styles.editbutton}><Edit /></div>
                </div>
            </div>
            {wantsEdit ? <> <div className={styles.editouter}>
                {products && products.map((product, index) => (<div key={index} className={styles.editcontainer}>
                    <h3 className={styles.editheader}>Product {index + 1}<Trash2 onClick={() => { handleDelete(index) }} height={18} className={styles.trashicon} /></h3>

                    <div className={styles.inputrow}>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>Product Code</p>
                            <input placeholder="Enter product code" value={product.ProductCode} className={styles.productinput} onChange={(e) => handleProductSelect(e, index)} />
                        </div>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>production Entry</p>
                            <input placeholder="Enter production entry" value={product.ProductionEntry} className={styles.productinput} onChange={(e) => { handleProductionEntry(e, index) }} />
                        </div>
                    </div>

                    <p className={styles.editsub}>Description</p>
                    <div className={styles.descriptiondiv}>
                        {product.Description}
                    </div>
                    <div className={styles.inputrow}>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>Tooling</p>
                            <input placeholder="Enter Tooling" className={styles.productinput} value={product.Tooling} onChange={(e) => { handleTooling(e, index) }} />
                        </div>
                        <div className={styles.inputcontainer}>
                            <p className={styles.editsub}>Block</p>
                            <input placeholder="Enter block" className={styles.productinput} value={product.Block} onChange={(e) => { handleBlock(e, index) }} />
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
                : products?.length > 0 ?
                    <div className={styles.displayouterdiv}>
                        {products?.map((product, index) =>
                        (<div key={index} className={styles.displayitem}>
                            <div className={styles.displaytoprow}>
                                <div className={styles.displaydot}></div>
                                <h2 className={styles.displayproduct}>Product {index + 1}</h2>
                            </div>
                            <div className={styles.displayinfogrid}>
                                <div className={styles.displayinfoitem}>
                                    <p className={styles.diiheader}>Product Code</p>
                                    <p className={styles.diiproduct}>{product.ProductCode}</p>
                                </div>
                                <div className={styles.displayinfoitem}>
                                    <p className={styles.diiheader}>Prod Entry</p>
                                    <p className={styles.diiproduct}>{product.ProductionEntry}</p>
                                </div>
                                <div className={styles.displayinfoitem}>
                                    <p className={styles.diiheader}>Tooling</p>
                                    <p className={styles.diiproduct}>{product.Tooling}</p>
                                </div>
                                <div className={styles.displayinfoitem}>
                                    <p className={styles.diiheader}>Block</p>
                                    <p className={styles.diiproduct}>{product.Block}</p>
                                </div>
                            </div>
                            <div className={styles.displayinfoitem}>
                                <p className={styles.diiheader}>Description</p>
                                <p className={styles.diiproduct}>{product.Description}</p>
                            </div>
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
                        <div className={styles.symbolsub}><p>Click Edit to configure production line</p></div>
                    </div>}

        </div>
    )
}


export default ProductionLine;