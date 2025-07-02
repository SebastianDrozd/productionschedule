"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { CalendarIcon, Factory, Package, Blend } from 'lucide-react';
import { createContext, useContext, useState } from "react";
import PackageTab from "@/tabs/PackageTab";
import ProductionTab from "@/tabs/ProductionTab";
import GrindingTab from "@/tabs/GrindingTab";
import MyContextProvider, { MyContext } from "@/util/MyContextProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductionScheduleEntry, saveProductionScheduleEntry } from "@/api/ProductionSchedule";
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PackageHeaders from "@/components/PackageHeaders";
import Spinner from "@/components/ui/Spinner";
export default function Home() {
  const { date,setDate,activeTab,setActiveTab } = useContext(MyContext)
  const queryClient = useQueryClient()
  console.log("This is the date context",date)

  const {
    data, isLoading, isError
  } = useQuery({
    queryKey: ['entries',date],
    queryFn: () => getProductionScheduleEntry(date),

  })


  const savePackagingProduct = (data) => {
    saveProductionScheduleMutationPackaging.mutate(data)
  }

  const saveProductionScheduleMutationPackaging = useMutation({
    mutationFn: (data) => saveProductionScheduleEntry(data),
    onSuccess: () => {
      toast.success("Line Updated")
      queryClient.invalidateQueries('entries')
    },
    onError: (error) => console.log(error)
  })

  const handleSelectDate= (e) => {
    setDate(e.target.value)
  }
  if(isLoading){
    return <Spinner/>
  }
  return (

    <div className={styles.container}>
      <div className={styles.datepicker}>
        <input className={styles.date} type="date" defaultValue={date} onChange={handleSelectDate} />
      </div>
      <div className={styles.tabcontainer}>
        <div className={`${styles.tabitem} ${activeTab === "Packaging" ? styles.activetab : ""}`} onClick={() => setActiveTab("Packaging")}>
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
      <div className={styles.headersdiv}>
         <PackageHeaders headersContent ={data} />
      </div>
       
      <div className={styles.tabcontainerlayout}>
        {activeTab == "Packaging" && <PackageTab savePackagingProduct={savePackagingProduct} lineinfo={data} />}
        {activeTab == "Production" && <ProductionTab />}
        {activeTab == "Grinding" && <GrindingTab />}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
    </div>

  );
}
