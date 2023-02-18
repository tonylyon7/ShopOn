import React from 'react'
import "./Scart.css"
import sclose from "../Images/sclose.svg"
import lapi from "../Images/lapi.svg"
import uparr from "../Images/uparr.svg"
import downarr from "../Images/downarr.svg"
import earb from "../Images/earb.svg"
import visa from "../Images/visa.png"
import master from "../Images/maste.png"
import paypal from "../Images/paypal.png"
import Checkout from '../../Checkout/Checkout'
import { Link } from 'react-router-dom'


const Scart = () => {
  return (
    <>
        <div className='container py-3 mt-4'>
            <p style={{fontSize: "20px",fontWeight:"700"}}>Shopping Cart<sup style={{fontSize: "12px", fontWeight: "500"}}>(2)</sup></p>
            <div className='row'>
                <div className='col-md-8'>
                    <table className='table border'>
                        <tbody>
                            <tr>
                                <td style={{fontSize:"10px",color:"#5D5F5F",paddingLeft:"60px"}}>Products</td>
                                <td style={{fontSize:"10px",color:"#5D5F5F",textAlign:"center"}}>Quantity</td>
                                <td style={{fontSize:"10px",color:"#5D5F5F",textAlign:"center"}}>Total</td>
                            </tr>
                            <tr>
                                <td className='d-flex justify-content-start' style={{alignItems:"center"}}>
                                    <img src={sclose} style={{width: "11px", marginLeft: "10px"}}/>
                                    <img src={lapi} style={{width: "65px", marginLeft: "30px"}}/>
                                    <div className='ms-3'>
                                        <p style={{fontSize: "10px", fontWeight: "600"}} className="m-0">Bucklo Wrop Wooden Table</p>
                                        <p style={{fontSize: "9px",color:"#5D5F5F"}} className="m-0">Color: Brown</p>
                                        <p style={{fontSize: "9px",color:"#5D5F5F"}} className="m-0">Dimension: 40x60 cm</p>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex rounded-pill px-3 justify-content-between border' style={{width:"100px",alignItems:"center",height:"35px",transform: "translatey(45%)",margin:"auto"}}>
                                        <p style={{fontSize: "11px", height: "0px"}}>01</p>
                                        <button className='p-0 m-0' style={{border: "none", lineHeight: "5px", backgroundColor: "transparent", height: "20px"}}><img style={{width: "6px"}} src={uparr}/><br/><img style={{width: "6px"}} src={downarr}/></button>
                                    </div>
                                </td>
                                <td>
                                    <p style={{fontSize:"11px",fontWeight:"700",textAlign:"center",transform: "translatey(130%)"}}>$69.36</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='d-flex justify-content-start border-bottom-0' style={{alignItems:"center"}}>
                                    <img src={sclose} style={{width: "11px", marginLeft: "10px"}}/>
                                    <img src={earb} style={{width: "65px", marginLeft: "30px"}}/>
                                    <div className='ms-3'>
                                        <p style={{fontSize: "10px", fontWeight: "600"}} className="m-0">Rivet Geometric Ceramic Wallclock</p>
                                        <p style={{fontSize: "9px",color:"#5D5F5F"}} className="m-0">Color: Black</p>
                                        <p style={{fontSize: "9px",color:"#5D5F5F"}} className="m-0">Dimension: 40x60 cm</p>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex rounded-pill px-3 justify-content-between border' style={{width:"100px",alignItems:"center",height:"35px",transform: "translatey(45%)",margin:"auto"}}>
                                        <p style={{fontSize: "11px", height: "0px"}}>01</p>
                                        <button className='p-0 m-0' style={{border: "none", lineHeight: "5px", backgroundColor: "transparent", height: "20px"}}><img style={{width: "6px"}} src={uparr}/><br/><img style={{width: "6px"}} src={downarr}/></button>
                                    </div>
                                </td>
                                <td>
                                    <p style={{fontSize:"11px",fontWeight:"700",textAlign:"center",transform: "translatey(130%)"}}>$69.36</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-md-4 border'>
                    <div className='px-1 py-3'>
                        <p className='mb-2' style={{fontSize:"13px",fontWeight:"700"}}>Summary</p>
                        <div className='d-flex justify-content-between'>
                            <p style={{fontSize:"10px",color:"#5D5F5F",fontWeight:"600"}} className='mb-2'>Subtotal</p>
                            <p className='mb-2' style={{fontWeight:"700",fontSize:"10px"}}>$94.14</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p style={{fontSize:"10px",color:"#5D5F5F",fontWeight:"600"}} className='mb-0'>Shipping</p>
                            <p className='mb-0' style={{fontWeight:"700",fontSize:"10px"}}>Free</p>
                        </div>
                        <hr className='malsmhr' style={{height:"0.1px"}}></hr>
                        <p style={{fontSize:"10px",color:"#5D5F5F",fontWeight:"600"}}>Discount Code</p>
                        <form className='d-flex justify-content-between'>
                            <input type='text' placeholder='Enter coupon' className='rounded-pill border px-3 py-1 malscart' style={{width:"73%"}}/>
                            <button className='rounded-pill border' style={{width:"25%",backgroundColor:"#E9672B",fontSize:"10px",color:"white"}}>Apply</button>
                        </form>
                        <hr className='malsmhr' style={{height:"0.1px"}}></hr>
                        <div className='d-flex justify-content-between'>
                            <p style={{fontSize:"10px",color:"#5D5F5F",fontWeight:"600"}} className='mb-2'>Total</p>
                            <p className='mb-2' style={{fontWeight:"800",fontSize:"12px"}}>$94.14</p>
                        </div>
                        <Link to='/Checkout'>
                            <button className='rounded-pill border py-2' style={{backgroundColor:"black",width:"100%",fontSize:"10px",color:"white"}}>Proceed to Checkout</button>
                        </Link> 
                        <div className='text-center mt-2'>
                            <img className='mx-2' src={visa} style={{width:"25px"}}/>
                            <img className='mx-2' src={master} style={{width:"25px"}}/>
                            <img className='mx-2' src={paypal} style={{width:"25px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Scart