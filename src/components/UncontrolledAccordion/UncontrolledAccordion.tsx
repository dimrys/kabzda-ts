import React, {useState} from "react";


type UncontrolledAccordionTypeProps = {
    title: string
    value: number
}





export function UncontrolledAccordion(props: UncontrolledAccordionTypeProps) {

    let [collapsed, setCollapsed] = useState(false)


    return (
        <div>
            <UncontrolledAccordionTitle title={props.title}
                                        onCollapsed = {() => {setCollapsed(!collapsed)}}
                                         />
            {!collapsed && <UncontrolledAccordionBody value={props.value}/>}
        </div>
    );
}

type UncontrolledAccordionTitleTypeProps = {
    title: string
    onCollapsed: () => void

}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitleTypeProps) {
    return (
        <h3 onClick={() => {props.onCollapsed()}}>----{props.title}----</h3>
    );

}

type UncontrolledAccordionBodyTypeProps = {
    value: number
}

function UncontrolledAccordionBody(props: UncontrolledAccordionBodyTypeProps) {
    return (
        <ul>
            {props.value > 0 && <li>1</li>}
            {props.value > 1 && <li>2</li>}
            {props.value > 2 && <li>3</li>}
            {props.value > 3 && <li>4</li>}
            {props.value > 4 && <li>5</li>}
        </ul>
    )
}


