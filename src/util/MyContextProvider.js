"use client"
import { createContext, useState } from "react"
export const MyContext = createContext(null);

const MyContextProvider = ({ children }) => {
    const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'))
    const [activeTab, setActiveTab] = useState("Packaging")

    return (
        <MyContext.Provider value={{date,activeTab,setDate,setActiveTab}}>
            {children}
        </MyContext.Provider>
    )
}


export default MyContextProvider