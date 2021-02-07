import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { action } from "@storybook/addon-actions"
import { UncontrolledRating } from './UncontrolledRating';


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
} ;

let callback = action("rating changed ")

export const UncontrolledRating1 = () => <UncontrolledRating defaultValue = {1} onChange={callback}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue = {2} onChange={callback}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue = {3} onChange={callback}/>
