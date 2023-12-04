import React, { Fragment, useState } from 'react'
import "./index.scss"

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useProducts } from '../../Context/Product';

function Shop() {

    const { products } = useProducts()

    const [sortBy, setSortBy] = useState('name')

    const [isAscending, setIsAscending] = useState(true)

    const [search, setSearch] = useState('')

    const [toggleBtn, setToggleBtn] = useState(1)

    const [value, setValue] = useState([0, 100]);
    // Changing State when volume increases/decreases 
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    function toggleButton(index) {
        setToggleBtn(index);
    }

    function handleSearch(e) {
        setSearch(e.value)
        
    }

    function handleSort(e) {
        console.log(e.value.slice(0,-1));
        setSortBy(e.value.slice(0,-1))
        if (e.value.slice(-1) === '1') {
            setIsAscending(true)
        }
        else if (e.value.slice(-1) === '2') {
            setIsAscending(false)
        }
        console.log(sortBy);
        console.log(isAscending);
    }

    return (
        <main>
            <section id='shop'>
                <div className="topSide">
                    <h2>Cafena Product</h2>
                    <a href="" className='firstLink'>HOME /</a>
                    <a href="" className='secondLink'>PRODUCT</a>
                    <div className="shape_1">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
                    </div>
                    <div className="shape_2">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                    </div>
                </div>
                <div className="bottomSide">
                    <div className="title">
                        <span>Showing 1-12 of 54 results</span>
                        <div className="sort">
                            <div className="icon">
                                <i className={toggleBtn === 1 ? "fa-solid fa-grip activeButton" : "fa-solid fa-grip"} onClick={() => toggleButton(1)}></i>
                                <i className={toggleBtn === 2 ? "fa-solid fa-grip-lines activeButton" : "fa-solid fa-grip-lines"} onClick={() => toggleButton(2)}></i>
                            </div>
                            <select onChange={(e)=>handleSort(e.target)}>
                                <option value="name1">Sort By A-Z</option>
                                <option value="name2">Sort By Z-A</option>
                                <option value="price1">Sort By Price To Higher</option>
                                <option value="price2">Sort By Price To Lower</option>
                            </select>
                        </div>
                    </div>
                    <div className="mainSide">
                        <div className="leftSide">

                            {products && products.filter((x)=> +x.price >= +value[0]).filter((x)=> +x.price <= +value[1]).filter((x)=>x.name.toLowerCase().includes(search.toLocaleLowerCase())).sort((a,b)=> +a[sortBy] > +b[sortBy] ? ( isAscending ? 1 : -1) : ( isAscending ? -1 : 1)).map((product) => (
                                <Fragment key={product.id}>
                                    <div className={toggleBtn === 2 ? "card activeCard" : "card"}>
                                        <div className={toggleBtn === 2 ? "imgbox activeImg" : "imgbox"}>
                                            <img className='imageOne' src={product.img} alt="" />
                                            <img className='imageTwo' src={`https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-${product.id}.png`} alt="" />
                                            <div className={toggleBtn === 2 ? "items activeItems" : "items"}>
                                                <i className="fa-solid fa-basket-shopping"></i>
                                                <i className="fa-regular fa-heart"></i>
                                                <i className="fa-regular fa-eye"></i>
                                            </div>
                                        </div>
                                        <div className={toggleBtn === 2 ? "subtitle activeSubTitle" : "subtitle"}>
                                            <a href="">ROSTED COFFEE</a>
                                            <h4>{product.name}</h4>
                                            <div className={toggleBtn === 2 ? "price activePrice" : "price"}>
                                                <h6>PRICE</h6>
                                                <span className='priceSpan'>${(+product.price * (100 - product.discount))/100} /</span>
                                                <del>${product.price}</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={toggleBtn === 2 ? "card activeCard" : "card"}>
                                        <div className={toggleBtn === 2 ? "imgbox activeImg" : "imgbox"}>
                                            <img className='imageOne' src={product.img} alt="" />
                                            <img className='imageTwo' src={`https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-${product.id}.png`} alt="" />
                                            <div className={toggleBtn === 2 ? "items activeItems" : "items"}>
                                                <i className="fa-solid fa-basket-shopping"></i>
                                                <i className="fa-regular fa-heart"></i>
                                                <i className="fa-regular fa-eye"></i>
                                            </div>
                                        </div>
                                        <div className={toggleBtn === 2 ? "subtitle activeSubTitle" : "subtitle"}>
                                            <a href="">ROSTED COFFEE</a>
                                            <h4>{product.name}</h4>
                                            <div className={toggleBtn === 2 ? "price activePrice" : "price"}>
                                                <h6>PRICE</h6>
                                                <span className='priceSpan'>${(+product.price * (100 - product.discount))/100} /</span>
                                                <del>${product.price}</del>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                        <div className="rightSide">
                            <div className="search">
                                <h2>Search Here</h2>
                                <div className="input">
                                    <input type="text" placeholder='search product' onChange={(e)=>handleSearch(e.target)} />
                                    <i className='fa-solid fa-magnifying-glass'></i>
                                </div>
                            </div>
                            <div className="categories">
                                <h2>Categories</h2>
                                <ul>
                                    <li>
                                        <a href="">Burger</a>
                                        <span>04</span>
                                    </li>
                                    <li>
                                        <a href="">2x Pizza</a>
                                        <span>06</span>
                                    </li>
                                    <li>
                                        <a href="">Cold Drinks</a>
                                        <span>08</span>
                                    </li>
                                    <li>
                                        <a href="">Chicken</a>
                                        <span>10</span>
                                    </li>
                                    <li>
                                        <a href="">Stuck Dish</a>
                                        <span>12</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter">
                                <h2>PRICE FILTER</h2>
                                <Typography id="range-slider" gutterBottom>
                                </Typography>
                                <Slider
                                    value={value}
                                    onChange={rangeSelector}
                                    valueLabelDisplay="auto"
                                    
                                />
                                <div className="priceFilter">
                                    <span className='filterValue'>${value[0]} -$ {value[1]}</span>
                                    <button>Filter</button>
                                </div>
                            </div>
                            <div className="topProduct">
                                <h2>Top Product</h2>
                                <div className="box">
                                    <div className="imgProduct">
                                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png" alt="" />
                                    </div>
                                    <div className="sideContent">
                                        <div className="rate">
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                        <a href="">Coffe Americano</a>
                                        <span className='price'>$325.00 / <del>$348</del></span>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="imgProduct">
                                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-2.png" alt="" />
                                    </div>
                                    <div className="sideContent">
                                        <div className="rate">
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                        <a href="">Coffe Americano</a>
                                        <span className='price'>$325.00 / <del>$348</del></span>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="imgProduct">
                                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-3.png" alt="" />
                                    </div>
                                    <div className="sideContent">
                                        <div className="rate">
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                        <a href="">Coffe Americano</a>
                                        <span className='price'>$325.00 / <del>$348</del></span>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="imgProduct">
                                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-4.png" alt="" />
                                    </div>
                                    <div className="sideContent">
                                        <div className="rate">
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                        <a href="">Coffe Americano</a>
                                        <span className='price'>$325.00 / <del>$348</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Shop