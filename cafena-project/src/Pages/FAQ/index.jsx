import React, { useState } from 'react'
import "./index.scss"

const data = [
    {
        question: "How does this work?",
        answer: "Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
    },
    {
        question: "Some menus are missing on a coffee shop page?",
        answer: "Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
    },
    {
        question: "Do any of your cheeses contain enzymes derived from animal sources?",
        answer: "Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
    },
    {
        question: "Are your menu prices the same as those at the Coffee house?",
        answer: "Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
    },
    {
        question: "Are your doughs vegan or vegetarian friendly?",
        answer: "Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
    }
]
function FAQ() {
    const [select, setSelect] = useState(null)
    const toggle = (i) => {
        if (select === i) {
            return setSelect(null)
        }
        setSelect(i)
    }
    return (
            <section id='faq'>
                <div className="topSide">
                    <h2>asking question</h2>
                    <a href="" className='firstLink'>HOME /</a>
                    <a href="" className='secondLink'>FAQ</a>
                    <div className="shape_1">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
                    </div>
                    <div className="shape_2">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                    </div>
                </div>
                <div className="accordion">
                    {data && data.map((item, i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <i className={select === i ? 'fa-solid fa-arrow-down rotate' : 'fa-solid fa-arrow-down'}></i>
                                <h2>{item.question}</h2>
                            </div>
                            <div className={select === i ? "content show" : "content"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    )
}

export default FAQ