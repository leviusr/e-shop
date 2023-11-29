'use client'
import { Products, ProductsModificable } from "@/interfaces/data";
import { ReactNode } from "react"
import { useContext, createContext, useState } from "react";

export const NoteContext = createContext<{
  setSelectData: (data:Products | null) => void; 
  selectData: Products | null;
  data: Products[];
  getData: () => Promise<void>
  delData: (id:number) => Promise<void>
  createData: (product:Products) => Promise<void>
  modifyData: (id:number, product:ProductsModificable) => Promise<void>
  uniqueData: (id:number) => Promise<void>
}>({
  selectData: null,
  setSelectData: async (data:Products | null) => {},
  data: [],
  getData: async () => {},
  delData: async (id:number) => {},
  createData: async (product:Products) => {}, 
  modifyData: async (id:number, product:ProductsModificable) => {},
  uniqueData: async (id:number) => {},
})


export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export const NotesProvider = ({children}:{children:React.ReactNode}) => {
  const [data, setData] = useState<Products[]>([]);
  const [selectData, setSelectData] = useState<Products | null>(null)
  
  async function getData () {
    const response = await fetch('/api/product')
    const valores = await response.json();
    setData(valores)
  }

  async function delData (id:number) {
    const response = await fetch(`/api/product/${id}`,{
      method:'DELETE'
    })
    const valores = await response.json();
    setData(data.filter((e) => e.id !== id))
  }

  async function createData (product:ProductsModificable) {
    const response = await fetch('http://localhost:3000/api/product',{
      method: 'POST',
      body: JSON.stringify(product),
      headers:{
        'Content-Type': 'application/json'
      },
    })
    const valores = await response.json() 
    setData([...data, valores])
  }

  async function uniqueData(id: number) {
    const res = await fetch(`/api/product/${id}`)
    const data = await res.json();
    setData(data);
  }

  async function modifyData (id:number, product:ProductsModificable) {
    const response = await fetch(`/api/product/${id}`,{
      method: 'PUT',
      body: JSON.stringify(product),
      headers:{
        'Content-Type': 'application/json'
      },
    })
    const valores = await response.json() 
    setData(data.map(product => (product.id === id ? valores : product)))
  }
  
  return(
  <NoteContext.Provider value={{selectData, setSelectData, uniqueData, modifyData, createData, getData, data, delData}}>{children}</NoteContext.Provider>
  )
}
