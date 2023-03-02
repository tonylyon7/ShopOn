import React, { useState } from 'react'
import '../Inventory/Inventory.css'
import { Link } from 'react-router-dom'
import pro from '../Inventory/Assets/profile 1.png'
import { FaBell, FaHome, FaCloudUploadAlt, FaTrash, FaPlus } from 'react-icons/fa'
import {HiBell} from 'react-icons/hi'
import MainCusNav from './MainCusNav'


const MainCusNav1 = () => {
    const [profileFile, setProfileFile] = useState([])

    const profiledFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        }
        );
        
        
        setProfileFile(imagesArray);
    };

  return (
    <div>
        <div className='header mt-3'>
            <nav className='ms-5'>
                <h1 className='ms-3'>Orders</h1>
                <select className='selects'>
                    <option>TEE Gadgets</option>
                    <option>Others</option>
                    <option>Others</option>
                    <option>Others</option>
                    <option>Others</option>
                    <option>Others</option>
                </select>
                <div className='belll'>
                    <HiBell className='bells'/>
                    <label>
                      <img src={pro} className='images'/>
                      <input type='file' name='image' onChange={profiledFile}/>
                    </label>
                        <div className='profileUploaded'>
                            {profileFile && 
                            profileFile.map((image, index) => {
                                return (
                                    <div key={image} className='image'>
                                        <img src={image} className='profileImg'/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
            </nav>
            <div className='head ms-5'>
                <Link to='/'><p><FaHome className='home ms-2'/></p></Link>
                <p>/</p>
                <p>Orders</p>
            </div>
        </div>
        <MainCusNav/>
    </div>
  )
}

export default MainCusNav1