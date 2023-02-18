import React from 'react'
import Lottie from 'react-lottie'


import WhatsappJson from '../assets/lottie/contact.json'

export const WhatsappAnimation = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: WhatsappJson
    }
    return <Lottie options={defaultOptions} width={"24em"} height={"24em"} />
}
