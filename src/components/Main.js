import React, { createContext, useEffect, useState } from 'react'
import Header from './Header';
import Table from './Table';

export const heroContext = createContext();
export const tableContext = createContext();

function Main() {
    let previousData = JSON.parse(localStorage.getItem('HerosData'));
    if(previousData === null) 
        previousData = [];
    
    const [heros, setHeros] = useState(previousData);
    const [tableData, setTableData] = useState(heros);
    const [searchDataNotFound, setSearchDataNotFound] = useState(false);


    useEffect(()=>{
        localStorage.setItem('HerosData',JSON.stringify(heros))
    },[heros])
        
  return (
    <div>
        <heroContext.Provider value={{heros,setHeros}}>
            <tableContext.Provider value={{tableData,setTableData,searchDataNotFound,setSearchDataNotFound}}>
                <Header/>
                <Table/>
            </tableContext.Provider>
        </heroContext.Provider>
    </div>
  )
}

export default Main
