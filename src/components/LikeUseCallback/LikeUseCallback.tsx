import React, {useCallback, useMemo, useState} from "react";


export const LikeUseCallback = () => {
    console.log ('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Masha", "Sasha"])
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    },[users])


    const memoAddUser = useMemo(() => {
        return () => {
            const newUsers = [...users, 'Sveta' + new Date().getTime()]
            setUsers(newUsers)
        }
    },[users])

    const memoAddUser2 = useCallback(() => {
            const newUsers = [...users, 'Sveta' + new Date().getTime()]
            setUsers(newUsers)
    },[users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Users users={newArray} addUser={memoAddUser2}/>
    </>
}



const UsersSecret = (props: { users: Array<string>, addUser: () => void }) => {
    console.log("Users")
    return <div>
        <button onClick={() => props.addUser()}>add users</button>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

