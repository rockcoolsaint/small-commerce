import React, { Children } from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <div className='p-5'>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout