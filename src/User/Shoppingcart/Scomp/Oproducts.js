import React from 'react'
import Footer from '../../Footer/Footer'
import a100 from "../Images/100.svg"
import a200 from "../Images/200.svg"
import a300 from "../Images/300.svg"
import a400 from "../Images/400.svg"
import a500 from "../Images/500.svg"
import a600 from "../Images/600.svg"
import "./Oproduct.css"


const Oproducts = () => {
  return (
    <>
        <div className='container my-5'>
            <p className='text-center mb-3' style={{fontWeight:"700",fontSize:"22px"}}>Other Products You'll Love</p>
            <div className='row'>
            <div className='col-md-2'>
                    <div className="malgridd">
                        <img src={a100} className="malgchairr"/>
                        <div className='malinpcol'>
                            <input type="color" className='malsmcoloo' value="#828282"/>
                            <input type="color" className='malsmcoloo' value="#BDBDBD"/>
                            <input type="color" className='malsmcoloo' value="#0F2C72"/>
                            <input type="color" className='malsmcoloo' value="#EB5757"/>
                            <input type="color" className='malsmcoloo' value="#F2994A"/>
                        </div>
                        <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                        <p className='text-dark maldoll'>$45.98</p>
                        <a className='malcart'>Add to Cart</a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="malgridd">
                        <img src={a200} className="malgchairr"/>
                        <div className='malinpcol'>
                            <input type="color" className='malsmcoloo' value="#828282"/>
                            <input type="color" className='malsmcoloo' value="#BDBDBD"/>
                            <input type="color" className='malsmcoloo' value="#0F2C72"/>
                            <input type="color" className='malsmcoloo' value="#EB5757"/>
                            <input type="color" className='malsmcoloo' value="#F2994A"/>
                        </div>
                        <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                        <p className='text-dark maldoll'>$45.98</p>
                        <a className='malcart'>Add to Cart</a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="malgridd">
                        <img src={a300} className="malgchairr"/>
                        <div className='malinpcol'>
                            <input type="color" className='malsmcoloo' value="#828282"/>
                            <input type="color" className='malsmcoloo' value="#BDBDBD"/>
                            <input type="color" className='malsmcoloo' value="#0F2C72"/>
                            <input type="color" className='malsmcoloo' value="#EB5757"/>
                            <input type="color" className='malsmcoloo' value="#F2994A"/>
                        </div>
                        <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                        <p className='text-dark maldoll'>$45.98</p>
                        <a className='malcart'>Add to Cart</a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="malgridd">
                        <img src={a400} className="malgchairr"/>
                        <div className='malinpcol'>
                            <input type="color" className='malsmcoloo' value="#828282"/>
                            <input type="color" className='malsmcoloo' value="#BDBDBD"/>
                            <input type="color" className='malsmcoloo' value="#0F2C72"/>
                            <input type="color" className='malsmcoloo' value="#EB5757"/>
                            <input type="color" className='malsmcoloo' value="#F2994A"/>
                        </div>
                        <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                        <p className='text-dark maldoll'>$45.98</p>
                        <a className='malcart'>Add to Cart</a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="malgridd">
                        <img src={a500} className="malgchairr"/>
                        <div className='malinpcol'>
                            <input type="color" className='malsmcoloo' value="#828282"/>
                            <input type="color" className='malsmcoloo' value="#BDBDBD"/>
                            <input type="color" className='malsmcoloo' value="#0F2C72"/>
                            <input type="color" className='malsmcoloo' value="#EB5757"/>
                            <input type="color" className='malsmcoloo' value="#F2994A"/>
                        </div>
                        <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                        <p className='text-dark maldoll'>$45.98</p>
                        <a className='malcart'>Add to Cart</a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="malgridd">
                        <img src={a600} className="malgchairr"/>
                        <div className='malinpcol'>
                            <input type="color" className='malsmcoloo' value="#828282"/>
                            <input type="color" className='malsmcoloo' value="#BDBDBD"/>
                            <input type="color" className='malsmcoloo' value="#0F2C72"/>
                            <input type="color" className='malsmcoloo' value="#EB5757"/>
                            <input type="color" className='malsmcoloo' value="#F2994A"/>
                        </div>
                        <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                        <p className='text-dark maldoll'>$45.98</p>
                        <a className='malcart'>Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Oproducts