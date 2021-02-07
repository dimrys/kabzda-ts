import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { action } from "@storybook/addon-actions"
import { UncontrolledOnOf } from './UncontrolledOnOf';




export default {
    title: 'UncontrolledOnOf',
    component: UncontrolledOnOf,

} ;


export const ChangeModeOn = () => {
    return <UncontrolledOnOf defaultOn = {true} onShang={action('on or of')}/>
};
export const ChangeModeOf = () => {
    return <UncontrolledOnOf defaultOn = {false} onShang={action('on or of')}/>
};

