'use client'
import { createContext, useState } from "react"
export const LanguageContext = createContext({
    language : 'en',
    setLanguage : ()=>{}
})
export function LanguageProvider({children, language, setLanguage}){
    
    return(
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}