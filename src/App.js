import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// USER IMPORTING
import Landing from "./User/Landingpage/Landing"
import Blog from "./User/BlogPage/Blog"
import About from "./User/AboutPage/About"
import Contact from "./User/Contact/Contact"
import BlogDetail from "./User/BlogPage/BlogDetail"
import FAQ from "./User/FAQ/FAQ"
import SignIn from "./User/SignUp/SignIn"
import Register from "./User/SignUp/Register"
import Error404 from "./User/Error404/Error404"
import Shopingcart from "./User/Shoppingcart/Shopingcart"
import Emptyshoppingcart from "./User/Shoppingcart/Emptyshoppingcart"
import Wishlistp from "./User/Wishlist/Wishlistp"
import Checkout from "./User/Checkout/Checkout"
import Shop from "./User/Shop/Shop"

// SELLER IMOORTING
import InventoryNav from "./vendor/Inventory/InventoryNav"
import InventoryAdd from "./vendor/Inventory/InventoryAdd"
import InventoryDetails from "./vendor/Inventory/InventoryDetails"
import Dashboard from "./vendor/Dashboard/Dashboard"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* USER ROUTING */}
          <Route path="/Register" element={<Register />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetail" element={<BlogDetail />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Error404" element={<Error404 />} />
          <Route path="/Shoppingcart" element={<Shopingcart />} />
          <Route path="/Emptyshoppingcart" element={<Emptyshoppingcart />} />
          <Route path="/Wishlist" element={<Wishlistp />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Shop" element={<Shop />} />

          {/* SELLER ROUTING */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/InventoryNav" element={<InventoryNav />} />
          <Route path="/InventoryAdd" element={<InventoryAdd />} />
          <Route path="/InventoryDetails" element={<InventoryDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
