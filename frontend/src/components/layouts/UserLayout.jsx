import React, { Children } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function UserLayout({children}) {
  return (
    <div>
        <Header/>
        <section>
            {Children}
        </section>
        <Footer/>
    </div>
  )
}

export default UserLayout