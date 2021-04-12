import React from 'react'
import { Error404 } from './Error404'
import { text, boolean } from '@storybook/addon-knobs'

export default {
    title: 'Error404',
    component: Error404
}

export const OriginalComponent = () => <Error404/>

export const Knobs = () => <Error404 msg={text('Label', 'PAGE NOT FOUND 404')}/>        
