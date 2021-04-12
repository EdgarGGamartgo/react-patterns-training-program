import React from 'react'
import { Footer } from './Footer'
import { text } from '@storybook/addon-knobs'

export default {
    title: 'Footer',
    component: Footer
}

export const OriginalComponent = () => <Footer/>

export const Knobs = () => <Footer msg={text('Label', 'netflixroulette')}/>        
