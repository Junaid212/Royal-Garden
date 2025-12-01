import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GalleryInner from '../Components/Gallery/GalleryInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderThree from '../Components/Header/HeaderThree'
import HeaderTwo from '../Components/Header/HeaderTwo'

function Gallery() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Gallery"
            />
            <GalleryInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Gallery
