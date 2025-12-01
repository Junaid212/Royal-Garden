import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ResortInner from '../Components/Resort/ResortInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderThree from '../Components/Header/HeaderThree'

function Resort() {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                title="Services"
            />
            <ResortInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Resort
