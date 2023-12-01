import React from 'react'
import './index.scss'

function TopGrade() {
  return (
    <>
      <section className='TopGrdae'>
        <div className="container_topGrade">
            <div className="worldTopTitle">
                <div className="text_topGrade">
                  <div className="topgrade">
                    <h6>TOP GRADE</h6> 
                    </div>  <br />
                <h2>WORLD TOP GRADE</h2>
                </div>
            </div>
            <div className="downPartWorldTop">
                <div className="firstTwoBrands TwoBrands">
                <div className="americano coffe_brand coffe_brand1">
                    <div className="americano_grade">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg" alt="" />
                       <div className="count"><h6>01</h6></div>
                       <div className="text_americano">
                        <h2>Americano Grade</h2>
                        <p>Curabitur semper erat a lacusey <br />
                        consequat, sit amet quam</p>
                       </div>
                    </div>
                </div>
                <div className="arebica coffe_brand coffe_brand2">
                    <div className="americano_grade">
                          <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-2.jpeg" alt="" />
                        <div className="count"><h6>02</h6></div> 
                        <div className="text_americano">
                          <h2>Arebica Green</h2>
                          <p>Curabitur semper erat a lacusey <br />
                          consequat, sit amet quam</p>
                        </div>
                      </div>
                  </div>
                </div>

              <div className="secondTwoBrands TwoBrands">
              <div className="americano coffe_brand coffe_brand3">
                    <div className="americano_grade">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-3.jpeg" alt="" />
                       <div className="count"><h6>03</h6></div> 
                       <div className="text_americano">
                        <h2>Mixed Rosted</h2>
                        <p>Curabitur semper erat a lacusey <br />
                        consequat, sit amet quam</p>
                       </div>
                    </div>
                </div>
                <div className="arebica coffe_brand coffe_brand4">
                    <div className="americano_grade">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-4.jpeg" alt="" />
                       <div className="count"><h6>04</h6></div> 
                       <div className="text_americano">
                        <h2>Robasta Rosted</h2>
                        <p>Curabitur semper erat a lacusey <br /> 
                        consequat, sit amet quam</p>
                       </div>
                    </div>
                </div>
              </div>
               
            </div>

        </div>
      </section>
    </>
  )
}

export default TopGrade
