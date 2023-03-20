import React from 'react';
import style from './Users.module.css'
import {usType} from "../Biznes";

const Users = (props:{users:usType,setUsers:any}) => {
    const shortenAddress = (addr: any) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;

    if (!props.users.myUsers)
        return <div></div>

    const delUser = (id: number) => {
        if (props.users.myUsers)
            props.setUsers({...props.users, myUsers: props.users.myUsers.filter((u: { id: number; }) => u.id !== id)})
    }
    const setClass = (index: number) => {
        if (props.users.myUsers && props.users.active)
            if (props.users.myUsers[index] === props.users.active)
                return "Active"
            else return ""
    }
    const toggleActive = (index: number, toggle: boolean = true) => {
        if (props.users.myUsers)
            props.setUsers({...props.users, active: props.users.myUsers[index]})
        if (!toggle)
            props.setUsers({...props.users, active: null})
    }


    return (
        <div className={style.users}>
            <div className={style.title}>

            </div>
            <div className={style.data}>

                <h2 className={style.title}>PARTICIPATION LISTING (ENABLE ONLY FOR PARTICIPANTS)</h2>

                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>WALLET</th>
                    </tr>
                    </thead>
                    {props.users.myUsers.map((user, index) => {
                            return (
                                <tbody key={user.id}>
                                <tr onMouseMove={() => toggleActive(index)}
                                    className={setClass(index)} onMouseOut={() => toggleActive(index, false)}>
                                    <td  >{user.username}</td>
                                    <td  >{user.email}</td>
                                    <td  style={{width:"105%"}}>{shortenAddress(user.address)}
                                        {setClass(index) ? <button className={style.delete}
                                                                   onClick={() => delUser(user.id)}>X</button> : ""}
                                    </td>
                                </tr>
                                </tbody>
                            )
                        }
                    )}
                </table>
            </div>
        </div>
    );
};

export default Users;