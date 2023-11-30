import React, { useState } from 'react'
import "./index.scss"

function Distinct() {
    const [video, setVideo] = useState(false)
    const videoStyle = {
        display: 'flex'
    }

    function openVideo() {
        setVideo(true)
    }

    function closeModal() {
        setVideo(false)
    }

    return (
        <section id='distinct'>
            <div className="topside">
                <div className="left_side">
                    <div className="hidden">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" />
                    </div>
                    <div className="textbox">
                        <h1>Distinct coffee aroma</h1>
                        <p>The coffee is brewed by first roasting the green coffee beans over hot
                            coals in a brazier. given an opportunity to sample.</p>
                        <button className='testycofee'>
                            <a href="">TASTY COFEE</a>
                        </button>
                        <button className='readmore'>
                            <a href="">READ MORE</a>
                        </button>
                    </div>
                </div>
                <div className="right_side">
                    <div className="hidden">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-2.png" alt="" />
                    </div>
                    <div className="imgbox">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/hero/hero-img-2-1.png" alt="" />
                        <a href="#">
                            <div className="icon" onClick={openVideo} >
                                <i class="fa-solid fa-play"></i>
                            </div>
                            <span class="border-effect">play video</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="modal" onClick={closeModal} style={ video ? videoStyle : {}}>
                <iframe 
                width="320"
                 height="240"
                  controls
                  src='https://www.youtube.com/watch?v=SqcY0GlETPk'>
                    {/* <source src="https://www.youtube.com/watch?v=SqcY0GlETPk" type="video/mp4" /> */}
                </iframe>
            </div>
            <div className="bottomside">

            </div>
        </section>
    )
}

export default Distinct