import React from 'react'
import sclose from "../Images/sclose.svg"
import lapi from "../Images/lapi.svg"
import uparr from "../Images/uparr.svg"
import downarr from "../Images/downarr.svg"
import earb from "../Images/earb.svg"


const Wishlist = () => {
  return (
    <>
        <div className='container mt-4'>
            <p style={{fontSize: "20px",fontWeight:"700",marginTop:"20px"}}>My Wishlist</p>
            <table className='table border'>
                <tbody>
                    <tr>
                        <td style={{fontSize:"10px",color:"#5D5F5F",paddingLeft:"60px"}}>Products</td>
                        <td style={{fontSize:"10px",color:"#5D5F5F",textAlign:"center"}}>Total</td>
                        <td style={{fontSize:"10px",color:"#5D5F5F",textAlign:"center"}}>Availabel</td>
                        <td style={{fontSize:"10px",color:"#5D5F5F",textAlign:"center"}}>Quantity</td>
                        <td></td>
                        <td></td>
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
                            <p style={{fontSize:"11px",fontWeight:"700",textAlign:"center",transform: "translatey(130%)"}}>$69.36</p>
                        </td>
                        <td>
                            <p style={{fontSize:"11px",fontWeight:"500",textAlign:"center",transform: "translatey(130%)",color:"#DA3E31"}}>In Stock</p>
                        </td>
                        <td>
                            <div className='d-flex rounded-pill px-3 justify-content-between border' style={{width:"100px",alignItems:"center",height:"35px",transform: "translatey(45%)",margin:"auto"}}>
                                <p style={{fontSize: "11px", height: "0px"}}>01</p>
                                <button className='p-0 m-0' style={{border: "none", lineHeight: "5px", backgroundColor: "transparent", height: "20px"}}><img style={{width: "6px"}} src={uparr}/><br/><img style={{width: "6px"}} src={downarr}/></button>
                            </div>
                        </td>
                        <td className='text-center'>
                            <button className='rounded-pill' style={{width:"100px",border:"solid",borderWidth:"0.1px",height:"35px",borderColor:"#E9672B",backgroundColor:"transparent",fontSize:"10px",color:"#E9672B",transform: "translatey(45%)"}}>View Product</button>
                        </td>
                        <td className='text-center'>
                            <button className='rounded-pill border' style={{width:"100px",height:"35px",backgroundColor:"#E9672B",fontSize:"10px",color:"white",transform: "translatey(45%)"}}>Add to Cart</button>
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
                            <p style={{fontSize:"11px",fontWeight:"700",textAlign:"center",transform: "translatey(130%)"}}>$69.36</p>
                        </td>
                        <td>
                            <p style={{fontSize:"11px",fontWeight:"500",textAlign:"center",transform: "translatey(130%)",color:"#DA3E31"}}>In Stock</p>
                        </td>
                        <td>
                            <div className='d-flex rounded-pill px-3 justify-content-between border' style={{width:"100px",alignItems:"center",height:"35px",transform: "translatey(45%)",margin:"auto"}}>
                                <p style={{fontSize: "11px", height: "0px"}}>01</p>
                                <button className='p-0 m-0' style={{border: "none", lineHeight: "5px", backgroundColor: "transparent", height: "20px"}}><img style={{width: "6px"}} src={uparr}/><br/><img style={{width: "6px"}} src={downarr}/></button>
                            </div>
                        </td>
                        <td className='text-center'>
                            <button className='rounded-pill' style={{width:"100px",border:"solid",borderWidth:"0.1px",height:"35px",borderColor:"#E9672B",backgroundColor:"transparent",fontSize:"10px",color:"#E9672B",transform: "translatey(45%)"}}>View Product</button>
                        </td>
                        <td className='text-center'>
                            <button className='rounded-pill border' style={{width:"100px",height:"35px",backgroundColor:"#E9672B",fontSize:"10px",color:"white",transform: "translatey(45%)"}}>Add to Cart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Wishlist