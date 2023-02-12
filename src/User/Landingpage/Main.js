import React from 'react'
import './CSS/main.css'
import img1 from './Assets/img1.png'
import food from './Assets/food.png'
import laptop from './Assets/laptop.png'
import chair1 from './Assets/Rectangle 267.png'
import label from './Assets/label.png'
import weather from './Assets/weather.png'
import group1 from './Assets/Group 131.png'
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
import tony1 from "./Assets/tony2img1.png"
import tony2 from "./Assets/tony2img2.png"
import tony3 from "./Assets/tony2img3.png"
import tony4 from "./Assets/tony2img4.png"
import tony5 from "./Assets/tony2img5.png"
import tony6 from "./Assets/tony2img6.png"
import tony7 from "./Assets/tony2img7.png"
import tony8 from "./Assets/tony2img8.png"
import tony9 from "./Assets/tony2img9.png"
import tony10 from "./Assets/tony2img10.png"
import {VscCircleLargeFilled} from 'react-icons/vsc'
import {ImFire} from 'react-icons/im'
import truck from './Assets/mdi_truck-delivery-outline.png'
import vector from './Assets/Vector.png'
import group from './Assets/Group.png'


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

     <section className='my-5 special-offer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4  man">
            <div className='special mt-5'> 
            <img classname='offer' src={special}/>
              <h4 className='furn ms-5'>on <span className='furni'> Furniture </span></h4>
            </div>
            <h5 className='fun'>import furniture sold by the best vendors <br/>
             known globally for quality</h5>
            <div className='chair'>
            <p className="chair"><img src={chair1}/></p>
            <img src={label} className='chair-label' />
            </div>
            <button className='Tony-now px-5 py-2'>shop now</button>
          </div>
          <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6"><img src={laptop}/></div>
                    <div className="col-md-6 men"><img src={food}/>
                    <div className='food-text text-center text-white'>
                      <h5 className='pt-4'>Beauty is not expensive here</h5>
                      <h6 className='food-price ms-5'>$19.99 <span className='ms-3'>$54.20</span></h6>
                     </div>
                    </div>
                  </div>
            <div className='tony-weather my-3'>
                <div className='row ms-3'>
                  <div className="col-md-4 mt-3">
                    <p className='tonyweda'>Myriam's garden wall Art</p>
                    <p className='after'>$42.13 <span className='before ms-3 mt-1'>$42.33</span></p>
                    <button className='tony-b px-5 py-2'> shop now</button>
                  </div>
                      <div className='col-md-8'><img src={weather}/>
                        <img src={group1} className='weather-group' />
                      </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Hotsales */}
    <div className=''>
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
                    {/* <div className='blackfriday'>
                        <img src={black}/>
                    </div> */}
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
            </div>
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
            <div className='tony-hot-last d-sm-flex'>
                <div className='tony-chair'>
                    <img src={table1} className="tony-chair1 img-fluid" />
                    <h6 className='tony-collection'>2020's NEW COLLECTION</h6>
                    <h3 className='tony-comfort'>Comfortable Chair</h3>
                    <a href='' className='Tony-explore text-decoration-none text-center'>Explore Now</a>
                    <img src={table2} className="tony-chair2 img-fluid" />
                </div>
                <div className='tony-lamb ms-5'>
                    <img src={lamb1} className="tony-lamb1 img-fluid" />
                    <h6 className='tony-collection tony-coll2'>2020's NEW COLLECTION</h6>
                    <h3 className='tony-comfort tony-comf2'>Vega Table Lamp</h3>
                    <a href='' className='Tony-explore tony-explo2 text-decoration-none text-center'>Explore Now</a>
                    <img src={lamb2} className="tony-lamp2 img-fluid" />
                </div>
            </div> 
            {/* our future   */}
            <div className='container'>
            <div className='tony2-heading'>Our Feature Product</div>
            <div className='tony2-items'>
                <ul>
                    <li><a href=''>All</a></li>
                    <li><a href=''>Electronics</a></li>
                    <li><a href=''>Kitchen</a></li>
                    <li><a href=''>Phones</a></li>
                    <li><a href=''>Kids</a></li>
                    <li><a href=''>Fashions</a></li>
                </ul>
            </div>
            <div className='col-md-12'>
              <div className='row'> 
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony1}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Eco 32" LED TELEVISION</div>
                  <div className='price'>$69.36 <span className='tony-discount'>$50.74</span></div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony2}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Double pocket men jacket</div>
                  <div className='price'>$56.12 <span className='tony-discount'>$69.36</span></div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony3}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Blender and Juicer</div>
                  <div className='price'>$163.36</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony4}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Iphone 14 128gb</div>
                  <div className='price'>$999.99</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony5}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Kids Cloth</div>
                  <div className='price'>$45.32 <span className='tony-discount'>$50.74</span></div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony6}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Lenovo Laptop</div>
                  <div className='price'>$240.99</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony7}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Patterned Chair</div>
                  <div className='price'>$129.99</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony8}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Bluetooth</div>
                  <div className='price'>$101.36 <span className='tony-discount'>$142.74</span></div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony9}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Red Heels</div>
                  <div className='price'>$90.36</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={tony10}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>7kg washing machine</div>
                  <div className='price'>$156.12</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={secound}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Long Chair</div>
                  <div className='price'>$197.36</div>
                  <div className='link'>Add to Cart</div>
                </div>
                <div className='tony-hot col-md-3 py-sm-2'>
                  <img src={third}/>
                  <div className='select py-sm-3'>
                    <VscCircleLargeFilled className='black'/>
                    <VscCircleLargeFilled className='red'/>
                    <VscCircleLargeFilled className='yellow'/>
                    <VscCircleLargeFilled className='grey'/>
                    <VscCircleLargeFilled className='green'/>
                  </div>
                  <div className='tony-text'>Wooden Lamp</div>
                  <div className='price'>$69.36</div>
                  <div className='link'>Add to Cart</div>
                </div>
              </div>
            </div>

            <div className='tony-friday d-flex  align-items-center text-white mb-5 mt-5'>
              <div className='d-flex ps-3'>
                <p className='text-start friday-text fri-text2 mt-3'>Up To <span className='tony-40'> 40% </span> Off <br/> <span className='tony-40-sale mt-3'> SALE!</span></p>
                <div className='tony-truck d-flex ms-5 mt-3'>
                  <img src={truck} className='mt-2 friday-img' />
                  <p className='text-start mt-4 friday-text ms-2'>Free & Fast  Shipping</p>
                </div>
              </div>
              <div className='d-flex friday2'>
                <img src={vector} className='mt-3' />
                <p className='text-start friday-text mt-4 ms-3'>30-days Free Return</p>
                <div className='d-flex ms-5 mt-2'>
                  <img src={group} />
                  <p className='text-start friday-text mt-3 ms-2'>100% Secure Shopping</p>
                </div>
              </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Main