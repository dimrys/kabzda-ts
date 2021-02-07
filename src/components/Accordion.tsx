import React from "react";

export type ItemType = {
    title: string
    value: any
}


export type AccordionTypeProps = {
    title: string
    collapsed: boolean
    setCollapsedAccordion: (collapsed: boolean) => void
    items: ItemType[]
    onClickItem:(value: any) => void
}
export type AccordionTitleTypeProps = {
    title: string
    setCollapsedAccordion: () => void

}
export type AccordionBodyTypeProps = {
   items: ItemType[]
   onClickItem:(value: any) => void
}

export function Accordion(props: AccordionTypeProps) {

    return (
        <div>
            <AccordionTitle title={props.title} setCollapsedAccordion = { () => {props.setCollapsedAccordion(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody items = {props.items} onClickItem = {props.onClickItem} />}
        </div>
    );
}

function AccordionTitle(props: AccordionTitleTypeProps) {
    return (
        <h3 onClick={() => {props.setCollapsedAccordion()}}>{props.title}</h3>
    );

}

function AccordionBody(props: AccordionBodyTypeProps) {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={() => props.onClickItem(i.value)} key={i.value}>{i.title}</li>)}
        </ul>
    )}


