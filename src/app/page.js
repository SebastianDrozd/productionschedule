"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { CalendarIcon, Factory, Package, Blend } from 'lucide-react';
import { useState } from "react";
import PackageTab from "@/tabs/PackageTab";
import ProductionTab from "@/tabs/ProductionTab";
import GrindingTab from "@/tabs/GrindingTab";
export default function Home() {
  const [activeTab, setActiveTab] = useState("Packaging")
  return (
    <div className={styles.container}>
      <div className={styles.datepicker}>
        <input className={styles.date} type="date" />
      </div>
      <div className={styles.tabcontainer}>
        <div
          className={`${styles.tabitem} ${activeTab === "Packaging" ? styles.activetab : ""}`}
          onClick={() => setActiveTab("Packaging")}
        >
          <Package height={16} />
          Packaging
        </div>

        <div
          className={`${styles.tabitem} ${activeTab === "Production" ? styles.activetab : ""}`}
          onClick={() => setActiveTab("Production")}
        >
          <Factory height={16} />
          Production
        </div>

        <div
          className={`${styles.tabitem} ${activeTab === "Grinding" ? styles.activetab : ""}`}
          onClick={() => setActiveTab("Grinding")}
        >
          <Blend height={16} />
          Grinding
        </div>
      </div>

      <div className={styles.tabcontainerlayout}>
        {activeTab == "Packaging" && <PackageTab/>}
        {activeTab == "Production" && <ProductionTab/>}
        {activeTab == "Grinding" && <GrindingTab/>}
      </div>

    </div>

  );
}
