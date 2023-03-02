import React from 'react'
import './Styles/Vendor/Landing.css'
import oval from './Images/Ovaloval.png'
import path from './Images/Pathpath.png'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {IoMdContacts} from 'react-icons/io'
import {TbMoonStars} from 'react-icons/tb'
import {TbWallet} from 'react-icons/tb'
import card2 from './Images/Card 2.png'

const Landing = () => {
  return (
    <>
      <div className='landingpage-container'>
        <div className='landingpage-wrapper'>
          <div className='card1'>
            <div className='congratulation'>
              <div className='circle'>
                <img src={oval}/>
                <img src={path} className='path'/>
              </div>
              <div className='welcome-text'>
                <h2>Congratulations John</h2>
              </div>
              <div className='paragraph'>
                <p>You have done 57.6% of more sales today. Check your new badge in your profile</p>
              </div>
            </div>
            <div className='balance'>
              <div className='margin'>
              <div className='wallet'>
                    <div className='deposit'>
                      <h2 className='header'>Balances</h2>
                      <div className='add'> + </div>
                    </div>
                    <div className='amount'>
                      <div className='symbol'><span className='dollar'>$</span> Dollar</div>
                      <div className='figure'>9784.79</div>
                    </div>
              </div>
              <div className='card-detail'>
                {/* <img src={card1}/> */}
                <img src={card2}/>
              </div>
              </div>
            </div>
          </div>

          <div className='card2'>
            <div className='sales'>
              <div className='top'>
                <div className='top-icon moon'><TbMoonStars/></div>
                <div className='top-select'>
                  <select>
                    <option>This Week</option>
                    <option>This Week</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>
              <div className='bottom'>
                <div className='sales-amount'>
                  <p className='text'>Sales</p>
                  <div className='value'>
                    <p>&#x20A6; 0.00</p>
                    <p className='percent'>+0.00%</p>
                  </div> 
                </div>
                <div className='volume'>
                  <p className='text'>Volume</p>
                  <p className='zeros'>0</p>
                </div>
              </div>
            </div>

            <div className='customer'>
            <div className='top'>
                <div className='top-icon'><IoMdContacts/></div>
                <div className='top-select'>
                  <select>
                    <option>This Week</option>
                    <option>This Week</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>

              <div className='below'>
                <div className='custom'>
                  <p>Customers</p>
                  <div className='values'>
                    <p className='custom-zero'>0</p>
                    <p className='percent'>+0.00%</p>
                  </div>
                </div>
                <div className='active'>
                  <p>Active</p>
                  <div className='active-value'>
                    <p className='custom-zero'>0</p>
                    <p className='percent'>+0.00%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='complete'>
            <div className='top'>
                <div className='top-icon'><HiOutlineShoppingBag/></div>
                <div className='top-select'>
                  <select>
                    <option>This Week</option>
                    <option>This Week</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>

              <div className='complete-bottom'>
                <div className='allorder'>
                  <p className='orders'>All orders</p>
                  <p className='zeros'>0</p>
                </div>
                <div className='pendings'><p>Pending</p><p className='zeros'>0</p></div>
                <div className='completed'>
                  <p>Completed</p>
                  <div className='complete-value'>
                    <p className='custom-zero'>0</p><p className='percent'>+0.00%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='graph'>
              <div className='retention'>
              <p className='client'>Client Retention</p>
              <div className='key'>
                <div className='key1'>
                <div className='violet-key'></div>
                <p className='new-client'>New Clients</p>
                </div>
                <div className='key2'>
                <div className='red-key'></div>
                <p className='retained-client'>Retained Clients</p>
                </div>
              </div>
              <div className='chart'>Graph Space</div>
              </div>
          </div>

          <div className='conclusion'>
            <div className='products'>
              <p className='product-orders'>Products orders</p>
            </div>
            <div className='summary'>
              <div className='summarys'>
                <div className='summary-wallet'><TbWallet className='summary-icon'/></div>
                <div className='summary-bottom'>
                  <div className='allproducts'>
                    <p className='summary-active'>All products</p>
                      <div className='summary-product'>
                        <p className='summary-zero'>0</p>
                        <p className='summary-percent'>+0.00%</p>
                      </div>
                  </div>
                  <div className='summary-active'>
                    <p className='summary-active'>Active</p>
                    <div className='summary-product'>
                        <p className='summary-zero'>0</p>
                        <p className='summary-percent'>+0.00%</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='recent'>
              <div className='recents'>
                <p className='recent-order'>Recent Orders</p>

                <div className='recent-bottom'>
                  <div className='recent-item'></div>
                  <div className='status'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;