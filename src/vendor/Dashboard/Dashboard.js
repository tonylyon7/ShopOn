import React from "react"
import Topnav from "../Dashboard/Topnav"
import Landing from "../Dashboard/Landing"
import Sidebar from "../Dashboard/Sidebar"
import Sidenav from "../Dashboard/Sidenav"

const Dashboard = () => {
  return (
    <>
      <Topnav />
      <Landing />
      <Sidebar />
      <Sidenav />
    </>
  )
}

export default Dashboard
