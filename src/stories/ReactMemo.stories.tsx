import React from "react";
import {useState} from "react";

export default {
    title: "ReactMemo demo"
}


const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
export const Users =React.memo(UsersSecret)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Valera', 'Masha'])
    return (
        <>
            <button onClick={() => setCounter(counter +1)}>+</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </>
    )
}