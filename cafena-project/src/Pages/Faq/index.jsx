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
function Faq() {
    const [select, setSelect] = useState(null)
    const toggle =(i)=>{
        if (select === i) {
            return setSelect(null)
        }
        setSelect(i)
    }
    return (
        <main>
            <section id='faq'>
                <div className="accordion">
                    {data && data.map((item,i)=>(
                        <div className="item">
                            <div className="title" onClick={()=>toggle(i)}>
                                <i className={select === i ? 'fa-solid fa-arrow-down rotate' :'fa-solid fa-arrow-down'}></i>
                                <h2>{item.question}</h2>
                            </div>
                            <div className={select === i ? "content show" : "content"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Faq