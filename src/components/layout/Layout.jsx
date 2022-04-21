import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="layout">
        <div >
            <h1>Here is Navbar</h1>
        </div>
        <main>
        {children}

        </main>
        <footer >
            here is footer
        </footer>
    </div>
  )
}

export default Layout