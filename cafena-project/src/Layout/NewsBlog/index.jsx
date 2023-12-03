import React from 'react'
import "./index.scss"
import Button from '../../components/Button'

function NewsBlog() {
    return (
        <>
            <section id='newsBlog'>
                <div className="topside">
                    <div className="title">
                        <span>NEWS & BLOG</span>
                        <h2>LATEST NEWS & BLOG</h2>
                    </div>
                    <Button data={{ fontsize: "12px" }}>
                        <a href="">learn more</a>
                    </Button>
                </div>
                <div className="bottomside">
                    <div className="card">
                        <div className="imgbox">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-1.jpeg" alt="" />
                        </div>
                        <div className="subCard">
                            <ul>
                                <span>BY: </span>
                                <li>RASALINA</li>
                            </ul>
                            <div className="link">
                                <a href="">Questions Business Must Be Able To Answers</a>
                            </div>
                            <div className="subtitle">
                                <div className='btn'>
                                    <button>READ MORE</button>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbox">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-2.jpeg" alt="" />
                        </div>
                        <div className="subCard">
                            <ul>
                                <span>BY: </span>
                                <li>RASALINA</li>
                            </ul>
                            <div className="link">
                                <a href="">Build A Cool Mornig With Cafena Coffee</a>
                            </div>
                            <div className="subtitle">
                                <div className='btn'>
                                    <button>READ MORE</button>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="card">
                            <div className="imgbox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-3.jpeg" alt="" />
                            </div>
                            <div className="subCard">
                                <ul>
                                    <span>BY: </span>
                                    <li>RASALINA</li>
                                </ul>
                                <div className="link">
                                    <a href="">Ideal Cocktails From Our Barmen For Pefect Mood</a>
                                </div>
                                <div className="subtitle">
                                    <div className='btn'>
                                        <button>READ MORE</button>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <i className="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default NewsBlog