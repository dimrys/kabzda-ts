import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { action } from "@storybook/addon-actions"
import {UncontrolledAccordion} from "./UncontrolledAccordion";




export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,

} ;

export const CollapsedAccordion = () => {
    return <UncontrolledAccordion title={"Menu"} value={4}/>
} 


