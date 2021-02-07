import React from "react";

export type TitleTypeProps = {
    value: string
}


export function Title(props: TitleTypeProps) {
    return <div>{props.value}</div>

}