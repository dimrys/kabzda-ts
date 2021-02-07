import React, {useState} from "react";


type OnOfTypeProps = {
    on: boolean
    setOn: (on: boolean) => void
}


export function OnOf(props: OnOfTypeProps) {



    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px',
        backgroundColor : props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: '5px',
        padding: '2px',
        backgroundColor : props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: '5px',
        backgroundColor : props.on ? 'green' : 'red',

    }


    return (
        <div>
            <div style={onStyle} onClick={ () => {props.setOn(!props.on)}}>On</div>
            <div style={offStyle} onClick={ () => {props.setOn(!props.on)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )

}