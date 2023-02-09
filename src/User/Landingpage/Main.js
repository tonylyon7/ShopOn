import React from 'react'
import './CSS/main.css'
import img1 from './Assets/img1.png'
import food from './Assets/food.png'
import laptop from './Assets/laptop.png'
import chair from './Assets/chair.png'
import weather from './Assets/weather.png'
import special from './Assets/special.png'
import main from "./Assets/Main.png"
import first from "./Assets/1.png"
import secound from "./Assets/2.png"
import third from "./Assets/3.png"
import forth from "./Assets/4.png"
import fifth from "./Assets/5.png"
import sixth from "./Assets/6.png"
import seventh from "./Assets/7.png"
import last from "./Assets/8.png"
import black from "./Assets/black.png"
import kid1 from "./Assets/kid1.png"
import kid2 from "./Assets/kid2.png"
import kid3 from "./Assets/kid3.png"
import kid4 from "./Assets/kid4.png"
import kid5 from "./Assets/kid5.png"
import kid6 from "./Assets/kid6.png"
import kid7 from "./Assets/kid7.png"
import kid8 from "./Assets/kid8.png"
import table1 from "./Assets/table1.png"
import table2 from "./Assets/table2.png"
import lamb1 from "./Assets/lamb1.png"
import lamb2 from "./Assets/lamb2.png"
import Rec from "./Assets/tonyrec.png"
import Rec2 from "./Assets/tonyre2.png"
import {VscCircleLargeFilled} from 'react-icons/vsc'
import {ImFire} from 'react-icons/im'


const Main = () => {
  return (
    <>
     <div className='container Tonys-main'>
        <div className="row">
          <div className="col-md-4 text-center mans">
               <img classname='mans'src={img1}/>
          </div>
          <div className="col-md-4 text-center Lyon-wrap">
            <div className='opo'>
               <p><small> QUALITY PRODUCTS</small></p> 

                <p className='text-white dami-new'>New generation</p>
                <p className='text-white dami-new'>E-commerce platform</p>
                <p className='text-white dami-new'>connecting seller to buyer</p>

                <p><small>The right platform to buy or sell from the comfort <br /> of your home. Verified products only. </small></p>

                <button className='dami-shop px-5 py-2'> shop now</button>
          </div>
          </div>
          <div className="col-md-4 text-center ">
          <p className="text-warning">2nd image</p>
          </div>
        </div>
     </div>

     <section className='my-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-4  man">
            <div className='special'> 
            <img classname='offer'src={special}/>
              <h4 className='furn'>on<span className='furni'>Furniture</span></h4>
            </div>
            <h5 className='fun'>import furniture sold by the best vendors <br/>
             known globally for quality</h5>
            <div className='chair'>
            <p className="chair"><img src={chair}/></p>
            </div>
            <button className='Tony-now px-5 py-2'>shop now</button>
          </div>
          <div className="col-md-8 ">
                  <div className="row">
                    <div className="col-md-6 men"><img src={laptop}/></div>
                    <div className="col-md-6 men"><img src={food}/></div>
                  </div>
            <div className='tony-weather my-3'>
                <div className='row'>
                  <div className="col-md-4">
                    <p className='tonyweda'>Myriam's garden wall Art</p>
                    <p className='after'>$42.13 <span className='before'>$42.33</span></p>
                    <button className='tony-b px-5 py-2'> shop now</button>
                  </div>
                      <div className='col-md-8'><img src={weather}/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Hotsales */}
    <div className='container'>
            <h2 className='Tony-heading'>Hot Sales</h2>
            <div className='row tony-liner' >
                <div className='tony col-md-3'>
                    <div className='flash-sales'>
                        <div>Flash Sale</div>
                            <div className='img-fluid'>
                                <h5 className='lyon'>-50%</h5>
                                <img className='tony-main' src={main} alt='main'/>
                            </div>
                        <div className='days'>
                            <h4 className='tony-num'>06 : 12 : 50 : 48</h4>
                            <h4 className='tony-days'>Day : Hrs : Min : Sec</h4>
                        </div>
                        <div className='colors'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                        </div>
                        <div className='Tmain'>
                            Bucklo Wrop Wooden Table
                            <p className='tony-price'>$56.12<span className='tony-discount'>$105.74</span></p>
                        </div>
                        <div className='tony-fire'>
                            <ImFire/>
                        </div>
                        <p className='lastitem'>Already Sold</p>
                    </div>
                    <div className='blackfriday'>
                        <img src={black}/>
                    </div>
                </div>

                <div className='col-md-9'>
                    <div className='row'>
                        <div className='tony-hot col-md-3'>
                            <img src={first}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={secound}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={third}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 <span className='tony-discount'>$50.74</span></div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={forth}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={fifth}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 <span className='tony-discount'>$50.74</span></div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={sixth}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={seventh}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 </div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='tony-hot col-md-3'>
                            <img src={last}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='tony-text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 <span className='tony-discount'>$50.74</span></div>
                            <div className='link'>Add to Cart</div>
                        </div>
                    </div> 
                </div>
            </div>
            <div> 
                <div className='tony-row row'>
                <div className='SubH'>Top categories for you</div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid1} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid2} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid3} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid4} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid5} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid2} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid7} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid8} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid1} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid6} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid1} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid3} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>   
                </div> 
            </div>
            <div className='tony-hot-last container row'>
                <div className='tony-chair col-md-6'>
                    <img src={table1} className="tony-chair1 img-fluid" />
                    <h6 className='tony-collection'>2020’s NEW COLLECTION</h6>
                    <h3 className='tony-comfort'>Comfortable Chair</h3>
                    <button className='Tony-explore'>Explore Now</button>
                    <img src={table2} className="tony-chair2 img-fluid" />
                </div>
                <div className='tony-lamb col-md-6'>
                    <img src={lamb1} className="tony-lamb1 img-fluid" />
                    <h6 className='tony-collection'>2020’s NEW COLLECTION</h6>
                    <h3 className='tony-comfort'>Vega Table Lamp</h3>
                    <button className='Tony-explore'>Explore Now</button>
                    <img src={lamb2} className="tony-lamp2 img-fluid" />
                </div>
            </div>   
        </div>
    </>
  )
}

export default Main