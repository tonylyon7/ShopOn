import React, { useEffect, useState } from 'react'
import './CheckoutCss/checkout.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'

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
                <div className='box '>
                    <h6 className='bill mt-3'>Billing Address</h6>
                    <form className='check-form'>
                        <label for="firstname"> First Name</label>
                        <label for='lastname' className='check2'>Last Name</label><br/>
                        <input type="text" placeholder='Max' className='check-input'></input>
                        <input type='text' placeholder='Luca' className='check-input ms-5'></input><br/>
                        <label for='email' className='mt-3'> Email</label><br/>
                        <input type='email' placeholder='max.luca@gmail.com'></input><br/>
                        <label for='street address' className='mt-3'> Street Address</label><br/>
                        <input type='text'></input><br/>
                        <label className='mt-3'>Country</label><br/>
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
                        <p className='check22'>
                            <input type='checkbox'></input>
                            <label for='check1' id='tick1'>My billing and shipping address are the same</label>
                        </p>
                        <p>
                            <input type='checkbox'></input>
                            <label for='check2'>Create an account for 10% off this purchase</label>
                        </p>
                             
                        <p>Add Tip</p>
                        <table>
                            <thead>Show your support for the team at Soairshop</thead>
                            <tr>
                                <td>15%</td>
                                <td>18%</td>
                                <td>20%</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>$14.70</td>
                                <td>$17.64</td>
                                <td>$19.60</td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Checkout