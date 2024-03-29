"use client"

import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = (props) => {
    return (
        <div className={props.className + " w-10/12 mx-auto bg-background-color"} >
          

            {props.children}

            <Footer />
        </div>
    )
}

export default Layout;

