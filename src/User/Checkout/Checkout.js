import React, { useEffect, useState } from 'react'
import './CheckoutCss/checkout.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { FaArrowRight } from 'react-icons/fa'
import norton from './CheckoutImages/Norton Icon.png'
import axios from 'axios'
import content from './CheckoutImages/Content.png'
import active from './CheckoutImages/finished to active.png'
import step from './CheckoutImages/_Step icon base.png'
import next from './CheckoutImages/active to next step.png'

const Checkout = () => {
    const [data, setData] = useState([]);
    const [getCountry, setCountry] = useState();
    const [getState, setState] = useState([]);
    const [selectedState, SetSelectedState] = useState();
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const country = [...new Set(data.map(item => item.country))];
    country.sort();
    
    const handleCountry = (e) => {
    let states = data.filter(state => state.country === e.target.value);
    states = [...new Set(states.map(item => item.subcountry))];
    states.sort();
    setState(states);
    }
    const handleState = (e) => {
        let cities = data.filter(city => city.subcountry === e.target.value);
       setCities(cities);
    }


  return (
    <div>
        <Navbar/>
        <div className='container align-items-center'>
            <div>
                <div className='text-center'>
                    <h3 className='header1'>Checkout</h3>
                    <h3 className='header2'>Choose delivery location</h3>
                    <p className='para1'>Where would be most convenient for you to receive your offer?</p>
                </div>
                <div className='img1'>
                    <img src={content}/><img src={active}/><img src={step}/><img src={next}/><img src={step}/><img src={next}/><img src={step}/>
                </div>
                <div className='line1'>
                    <p><span className='welcome'>Welcome</span><span className='ship'>Shipping method</span><span className='ment'>Payment</span><span className='ord'>Order</span></p>
                </div>
                <div className='box '>
                    <h6 className='bill mt-3'>Billing Address</h6>
                    <form className='check-form'>
                        <label for="firstname"> First Name</label>
                        <label for='lastname' className='check2'>Last Name</label><br/>
                        <input type="text" placeholder='Max' className='check-input'></input>
                        <input type='text' placeholder='Luca' className='check-input ms-5'></input><br/>
                        <label for='email' className='mt-3'> Email</label><br/>
                        <input type='email' placeholder='max.luca@gmail.com' className='email-input'></input><br/>
                        <label for='street address' className='mt-3'> Street Address</label><br/>
                        <input type='text' className='email-input'></input><br/>
                        <label className='mt-3 country'>Country</label><br/>
                        <select onChange={(e) => handleCountry(e)}>
                            <option>Select Country</option>
                            {country.map(items => <option key={items} value={getCountry}>{items}</option>)}
                        </select><br/>
                        <label className='mt-3'>State/Province</label>
                        <label>City</label><br/>
                        <select onChange={(e) => handleState(e)}className='check-input'>
                            <option>Select State/Province</option>
                            {getState.map(items => <option key={items}  value={selectedState}>{items}</option>)}
                        </select>
                         <select className='check-input ms-5'>
                            <option>Select Cities</option>
                            {cities.map(items => <option key={items.name}>{items.name}</option>)}
                         </select>
                        <label type='number' className='mt-3'>Zip/ Postal Code</label>
                        <label type='tel' className='check3'>Phone Number</label><br/>
                        <input for='zip code' className='check-input'></input>
                        <input for='phone number' className='check-input ms-5'></input><br/>
                        <div className='d-flex align-items-center'>
                            <input type='checkbox'/>
                            <p className='ms-3 mt-3'>My billing and shipping address are the same</p>
                        </div>
                        <div className='d-flex align-items-center checkout-account'>
                            <input type='checkbox'/>
                            <p className='ms-3 mt-3'>Create an account for 10% off this purchase</p>
                        </div>
                        <h5 className='add-tip'>Add tip</h5>
                        <div className='checkout-tip mt-2'>
                            <h5 className='support'>Show your support for the team at Soairshop</h5>
                            <div className='checkout-put-tip'>
                                <div className='checkout-price'>
                                    <table style={{width: '100%' }}>
                                        <tr>
                                            <td className='text-center'>15% <br/> <span>$14.70</span></td>
                                            <td className='text-center'>18% <br/> <span>$17.64</span></td>
                                            <td className='text-center'>20% <br/> <span>$19.60</span></td>
                                            <td className='checkout-none'>None</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className='checkout-discount mt-5'>
                                    <form>
                                        <input type='text' placeholder='Discount code'/>
                                        <button type='submit' className='ms-2'>Apply</button>
                                    </form>
                                </div>
                                <p className='ms-4 mt-3 thankyou'>Thank you, we appreciate it</p>
                            </div>
                            <div className='d-flex checkout-foot'>
                                <img src={norton}/>
                                <Link to='/Checkout1' className='d-flex justify-content-center align-items-center checkout-next text-center text-decoration-none text-white'>Next <FaArrowRight className='ms-3'/></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
        <Footer/>
    </div>
  )
}

export default Checkout