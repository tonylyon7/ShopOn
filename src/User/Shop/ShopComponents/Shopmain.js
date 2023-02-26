import React from 'react'
import "../Styles/Shopmain.css"
import x from "../Images/x.svg"
import sel from "../Images/sel.svg"
import offer from "../Images/offer.svg"
import soch from "../Images/soch.svg"
import list from "../Images/listt.svg"
import grid from "../Images/grid.svg"
import gchair from "../Images/gchair.svg"
import "../Styles/Narrival.css"
import a100 from "../Images/100.svg"
import a200 from "../Images/200.svg"
import a300 from "../Images/300.svg"
import a400 from "../Images/400.svg"
import a500 from "../Images/500.svg"
import a600 from "../Images/600.svg"
import a700 from "../Images/700.svg"
import a800 from "../Images/800.svg"
import a900 from "../Images/900.svg"

const Shopmain = () => {
  return (
    <>
        <main className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <p className='malsmf'>Filter</p>
                    <div className='d-flex row'>
                        <div className='d-flex col'>
                            <img className='malx' src={x}/>
                            <p className='malawp'>Accessories</p>
                        </div>
                        <div className='d-flex col'>
                            <img className='malx' src={x}/>
                            <p className='malawp'>Wooden</p>
                        </div>
                    </div>
                    <hr className='malsmhr'></hr>
                    <div className='d-flex justify-content-between'>
                        <p className='malsmcat'>Categories</p>
                        <img src={sel} className="malsmsel"/>
                    </div>
                    <p className='malporg'>--Accessories</p>
                    <p className='malpgra'>Cabinets</p>
                    <p className='malpgra'>Amchairs</p>
                    <p className='malpgra'>Bookcases</p>
                    <p className='malpgra'>Curtains</p>
                    <p className='malpgra'>Cofee tables</p>
                    <p className='malpgra'>Decor</p>
                    <p className='malpgra'>Ottomans</p>
                    <p className='malpgra'>Floor Lamps</p>
                    <hr className='malsmhr'></hr>
                    <div className='d-flex justify-content-between'>
                        <p className='malsmcat'>Types</p>
                        <img src={sel} className="malsmsel"/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input malsmcb" type="checkbox" id="check1" name="wooden" value="something" checked/>
                        <label className="form-check-label malporg malmtfg">Wooden</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input malsmcbb" type="checkbox" id="check1" name="wooden" value="something"/>
                        <label className="form-check-label malpgra malmtfg">Iron</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input malsmcbb" type="checkbox" id="check1" name="wooden" value="something"/>
                        <label className="form-check-label malpgra malmtfg">Ceramic</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input malsmcbb" type="checkbox" id="check1" name="wooden" value="something"/>
                        <label className="form-check-label malpgra malmtfg">Material</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input malsmcbb" type="checkbox" id="check1" name="wooden" value="something"/>
                        <label className="form-check-label malpgra malmtfg">Glass</label>
                    </div>
                    <hr className='malsmhr'></hr>
                    <div className='d-flex justify-content-between'>
                        <p className='malsmcat'>Colors</p>
                        <img src={sel} className="malsmsel"/>
                    </div>
                    <div>
                        <input type="color" className='malsmcolo' value="#0F1214"/>
                        <input type="color" className='malsmcolo' value="#828282"/>
                        <input type="color" className='malsmcolo' value="#BDBDBD"/>
                        <input type="color" className='malsmcolo' value="#0F2C72"/>
                        <input type="color" className='malsmcolo' value="#EB5757"/>
                        <input type="color" className='malsmcolo' value="#F2994A"/>
                        <input type="color" className='malsmcolo' value="#CDD454"/>
                        <input type="color" className='malsmcolo' value="#219653"/>
                        <input type="color" className='malsmcolo' value="#6FCF97"/>
                        <input type="color" className='malsmcolo' value="#2F80ED"/>
                        <input type="color" className='malsmcolo' value="#56CCF2"/>
                        <input type="color" className='malsmcolo' value="#9B51E0"/>
                        <input type="color" className='malsmcolo' value="#BB6BD9"/>
                    </div>
                    <hr className='malsmhr'></hr>
                    <div className='d-flex justify-content-between'>
                        <p className='malsmcat'>Price Range</p>
                        <img src={sel} className="malsmsel"/>
                    </div>
                    <input type="range" className='malinpra' min="0" max="8000"/>
                    <div className='d-flex justify-content-between' style={{color: "#E3E3E3", fontSize: "10px"}}>
                        <p>$0</p>
                        <p>$8000</p>
                    </div>
                    <div className='malsmbgso text-center'>
                        <img src={offer} className="malofferr"/>
                        <div className='malmtfgg'>
                            <p className='text-start'>on <span className='malsmcat'>Furniture</span></p>
                            <p className='malpgra text-start'>Gently sloping curves and large dual cushions create a favorite lounging spot</p>
                        </div>
                        <img src={soch} style={{width: "100%"}}/>
                        <button className='malsmsn'>Shop Now</button>
                    </div>
                </div>
                <div className='col-md-9 pb-3'>
                    <div className='d-flex justify-content-between malsmnav2'>
                        <div className='d-flex justify-content-between' style={{width: "35%"}}>
                            <div className='d-flex justify-content-between malsmnav22' style={{width: "25%"}}>
                                <p className='malsmcat'><span className='malpgra'>Show - </span>20</p>
                                <img src={sel} className="malsmsell"/>
                            </div>
                            <hr className='malsmhr' style={{width: "1px", height: "20px"}}></hr>
                            <div className='d-flex justify-content-between malsmnav22' style={{width: "60%"}}>
                                <p className='malsmcat'><span className='malpgra'>Sort by - </span>Price Low to High</p>
                                <img src={sel} className="malsmsell"/>
                            </div>
                        </div>
                        <div className='d-flex malsmgal'>
                            <img src={grid}/>
                            <img src={list}/>
                        </div>
                    </div>
                    <hr className='malsmhr'></hr>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div class="col-md-3 malgridd">
                                <img src={a100} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a200} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a300} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a400} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                        <div className='row'>
                            <div class="col-md-3 malgridd">
                                <img src={a500} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a600} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={gchair} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a800} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                        <div className='row'>
                            <div class="col-md-3 malgridd">
                                <img src={a900} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a100} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a200} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a300} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                        <div className='row'>
                            <div class="col-md-3 malgridd">
                                <img src={a400} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a500} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a600} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a700} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                        <div className='row'>
                            <div class="col-md-3 malgridd">
                                <img src={a800} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a900} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={gchair} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <div class="col-md-3 malgridd">
                                <img src={a100} className="malgchairr"/>
                                {/* <hr className='malsmhr'></hr> */}
                                <div className=''>
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
                            <ul className="pagination pagination-sm justify-content-center mt-5 malsmull">
                                <li className="page-item malsmpab"><a className="page-link" href="">Pre</a></li>
                                <li className="page-item"><a className="page-link" href="">1</a></li>
                                <li className="page-item active"><a className="page-link" href="">2</a></li>
                                <li className="page-item"><a className="page-link" href="">3</a></li>
                                <li className="page-item"><a className="page-link" href="">4</a></li>
                                <li className="page-item"><a className="page-link" href="">5</a></li>
                                <li className="page-item malsmpab"><a className="page-link" href="">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Shopmain