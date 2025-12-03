import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ServiceInner from '../Components/Services/ServiceInner'
import TourTwo from '../Components/Tour/TourTwo'
import PricingPlan from '../Components/Services/PricingPlan'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import AboutFour from '../Components/About/AboutFour'
import HeaderThree from '../Components/Header/HeaderThree'
import HeaderTwo from '../Components/Header/HeaderTwo'
import FooterTwo from '../Components/Footer/FooterTwo'

function Service() {
    return (
        <div>
            <HeaderTwo />
            <Breadcrumb
                title="Garden"
            />
            <AboutFour />
            {/* <ServiceInner /> */}
            {/* <TourTwo /> */}
            {/* <PricingPlan className="space-bottom"/> */}
            <FooterTwo />
            <ScrollToTop />
        </div>
    )
}

export default Service
