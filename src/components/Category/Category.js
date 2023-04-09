import React from 'react';
import { STATUS } from "../../utils/status";
import "./Category.scss";
import {Link} from "react-router-dom";
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { menu } from '../Error/menu';

const Category = ({categories, status}) => {
    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
    <section className = "categories bg-ghost-white" id = "categories">
        <div className = "container">
            <div className = "categories-content">
                <div className='section-title'>
                    <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
                </div>
                <div className = "category-items grid">
                    {
                        categories.slice(0, 4).map((category,index) => (
                            <Link to = {`category/${category.id}`} key = {category.id}>
                                <div className = "category-item text-center flex newFlex" >
                                    <div className='category-item-img text-center'>
                                    {category.name =='Electronics'  ? <img src = {menu[index].Electronics} alt = ""  className='new draw meet'/>:''}
                                    {category.name =='Clothes'  ? <img src = {menu[index].Clothes} alt = ""  className='new draw meet'/>:''}
                                    {category.name =='Shoes'  ? <img src = {menu[index].Shoes} alt = ""  className='new draw meet'/>:''}
                                    {category.name =='Change title'  ? <img src = {menu[index].Changetitle} alt = ""  className='new draw meet'/>:''}
                                    </div>
                                    <div className = "category-item-name">
                                        <h6 className='fs-20'>{category.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category