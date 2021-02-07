import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Accordion, AccordionTypeProps, ItemType} from "./Accordion";
import { action } from "@storybook/addon-actions"
import {Story} from "@storybook/react/types-6-0";




export default {
    title: 'Accordion',
    component: Accordion,

} ;
const onClickCallback = action('accordion')
const onClickCallbackItems = action('Items was clicked')

const Template: Story<AccordionTypeProps> = (args) => <Accordion {...args} />;

export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args = {
    title:'Menu',
    collapsed: true,
    setCollapsedAccordion: onClickCallback,
    items: [],
}

export const UncollapsedAccordion = Template.bind({})
UncollapsedAccordion.args = {
    title:'Users',
    collapsed: false,
    setCollapsedAccordion: onClickCallback,
    items: [{title:"Dima",value:1},{title:"Sasha",value:2},{title:"Valera",value:3},{title:"Masha",value:4}],
    onClickItem: onClickCallbackItems
}



export const ChangeAccordion: Story<AccordionTypeProps> = (args) => {
    let [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} setCollapsedAccordion={() => setValue(!value)} onClickItem={onClickCallbackItems}/>
};
ChangeAccordion.args = {
    title: 'Menu',
    items: [{title:"Dima",value:1},{title:"Sasha",value:2},{title:"Valera",value:3},{title:"Masha",value:4}]
}
