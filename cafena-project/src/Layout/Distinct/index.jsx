import React, { useState } from 'react'
import "./index.scss"
import Button from '../../components/Button'
import Video from '../../components/Video'


function Distinct() {
    const [video, setVideo] = useState(false)
    const videoStyle = {
        display: 'flex',
        transform: "scale(1)",
    }

    function openVideo() {
        document.body.style.overflow = "hidden"
        setVideo(true)
        setLoading(true)
    }

    function closeModal() {
        setVideo(false)
        document.body.style.overflow = "visible"
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
                        <button className='tastycofee'>
                            <a href="">TASTY COFEE</a>
                        </button>
                        <Button>
                            <a href="">read more</a>
                        </Button>
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
                            <span>play video</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="modal" onClick={closeModal} style={video ? videoStyle : {}}>
                    <Video style={video ? videoStyle : {}} />
                <button className='closeVideo'>
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <div className="bottomside">
                <div className="box">
                    <span>1992</span>
                    <h3>How we Started</h3>
                    <p>Curabitur semper erat a lacusey
                        sedn consequat, sit amet quamey.</p>
                </div>
                <div className="box">
                    <span>2002</span>
                    <h3>Coffee Beans</h3>
                    <p>Curabitur semper erat a lacusey
                        sedn consequat, sit amet quamey.</p>
                </div>
                <div className="box">
                    <span>2014</span>
                    <h3>Family Work</h3>
                    <p>Curabitur semper erat a lacusey
                        sedn consequat, sit amet quamey.</p>
                </div>
                <div className="box">
                    <span>2019</span>
                    <h3>Bangladeshy Grades</h3>
                    <p>Curabitur semper erat a lacusey
                        sedn consequat, sit amet quamey.</p>
                </div>
            </div>
        </section>
    )
}

export default Distinct