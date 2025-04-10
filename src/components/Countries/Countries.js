import React, { useEffect, useState } from 'react'
import Country from './Country'
import Search from './Search'
import { ToastContainer, toast } from 'react-toastify';

const Countries = () => {

const url = 'https://restcountries.com/v3.1/all'

const [allcountries , setallCounries] =useState([])
const [countries , setCounries] =useState([])

const [err , setErr] =useState(null)
const [isLoad ,setLoad]=useState(true)




const getname =(name) => {
  toast(name)
  const filtered = countries.filter((country) =>{
    return country.name.common !==name
  })
  setCounries(filtered)}


  const getSearch = (result)=>{
    
    const searchResult = allcountries.filter((country)=>{
      return country.name.common.toLowerCase().startsWith(result.toLowerCase())
    }) 
    setCounries(searchResult)
  }


useEffect(()=>{
  fetchData(url)
},[])

const fetchData = async (url)=>{
  setLoad(true)
  try {
    const res = await fetch(url)
    const data = await res.json()
    setallCounries(data)
    setCounries(data)
    setLoad(false)
    setErr(null)
  } catch (error) {
    setErr(error)
    isLoad(false)
  }
}



  return (
    <div>
    <ToastContainer/>
      {isLoad && 'Loading..'}
      {err && 'fail'}
      <Search getSearch={getSearch}/>
      {countries && <Country countries={countries} getname={getname}/>}
    </div>
  )
}

export default Countries
