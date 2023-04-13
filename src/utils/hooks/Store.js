import React, { useState } from 'react'
const DataProvider = React.createContext(null)
function Store({children}) {
    const [store,setStore]=useState({name:"siddhartha"})
  return (
   <DataProvider.Provider value={{store , setStore}} >
    {children}
   </DataProvider.Provider>
  )
}
export const useStore = ()=>React.useContext(DataProvider) || {store : "" , setStore :()=>{}}
export default Store;