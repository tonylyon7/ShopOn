import React, { useState } from 'react'
import './Inventory.css'
import { Link } from 'react-router-dom'
import pro from './Assets/profile 1.png'
import { FaBell, FaHome, FaCloudUploadAlt, FaTrash, FaPlus } from 'react-icons/fa'
import {HiBell} from 'react-icons/hi'

const InventoryNav1 = () => {
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
        <div className='header'>
            <nav>
                <h1>Inventory</h1>
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
            <div className='head'>
                <Link to='/'><p><FaHome className='home'/></p></Link>
                <p>/</p>
                <p>Inventory</p>
            </div>
        </div>
    </div>
  )
}

export default InventoryNav1