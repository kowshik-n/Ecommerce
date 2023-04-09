import React from 'react'
import { menu } from './menu'

const ProductApi = ({name,index}) => {
  return (
    <>
       {name =='Electronics'  ? <img src = {menu[index].Electronics} alt = ""  className='pd-img'/>:''}
                                    {name =='Clothes'  ? <img src = {menu[index].Clothes} alt = ""  className='pd-img'/>:''}
                                    {name =='Shoes'  ? <img src = {menu[index].Shoes} alt = ""  className='pd-img'/>:''}
                                    {name =='Change title'  ? <img src = {menu[index].Changetitle} alt = ""  className='pd-img'/>:''}
    </>
  )
}

export default ProductApi
