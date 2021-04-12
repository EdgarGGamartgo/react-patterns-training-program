import React from 'react'
import NavBar from './NavBar'
import { Provider } from 'react-redux'
import store from './../redux/store'
import { text } from '@storybook/addon-knobs'

export default {
    title: 'NavBar',
    component: NavBar
}

export const OriginalComponent = () => <Provider store={store}><NavBar/></Provider>

export const Knobs = () => <Provider store={store}><NavBar msg={text('Label', 'SORT BY')} /></Provider>   
