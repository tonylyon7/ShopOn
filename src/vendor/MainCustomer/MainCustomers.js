import React from react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const MainCustomers = () => {

    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={ <MainCusNav1/> } /> 
                </Routes>
            </Router>
        </div>
    )
}


export default MainCustomers