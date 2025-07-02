"use client"
import PackageHeaders from "@/components/PackageHeaders";
import styles from "../styles/tabs/PackageTab.module.css"
import PackingLineOne from "@/components/lines/packaging/PackingLineOne";
import { useEffect } from "react";
const PackageTab = ({ savePackagingProduct, lineinfo }) => {
    const line1Data = lineinfo?.filter((item) => item.Line === "1") || [];
    const line2Data = lineinfo?.filter((item) => item.Line === "2") || [];
    const line3Data = lineinfo?.filter((item) => item.Line === "3") || [];
    const line4Data = lineinfo?.filter((item) => item.Line === "4") || [];
    const line5Data = lineinfo?.filter((item) => item.Line === "5") || [];
    const line6Data = lineinfo?.filter((item) => item.Line === "6") || [];


    return (
        <div className={styles.container}>
          
            <div className={styles.linecontainer}>
                <PackingLineOne line={1} savePackagingProduct={savePackagingProduct} lineinfo={line1Data} />
                <PackingLineOne line={2} savePackagingProduct={savePackagingProduct} lineinfo={line2Data} />
                <PackingLineOne line={3} savePackagingProduct={savePackagingProduct} lineinfo={line3Data} />
                <PackingLineOne line={4} savePackagingProduct={savePackagingProduct} lineinfo={line4Data} />
                <PackingLineOne line={5} savePackagingProduct={savePackagingProduct} lineinfo={line5Data} />
                 <PackingLineOne line={6} savePackagingProduct={savePackagingProduct} lineinfo={line6Data} />
            </div>
        </div>
    )
}

export default PackageTab;