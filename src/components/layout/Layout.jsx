import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="layout">
       <Navbar />
        <main className="layout__main">
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout