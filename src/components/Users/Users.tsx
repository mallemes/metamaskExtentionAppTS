import React, {useEffect, useState} from 'react';
import {getUsers, usersType} from "../../API/api";
import style from './Users.module.css'

const Users = () => {
    const shortenAddress = (addr: any) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;
    type usType = {
        myUsers: null | Array<usersType>,
        active: null | usersType
    }
    const [users, setUsers] = useState<usType>({myUsers: null, active: null})
    useEffect(() => {
        async function fetchData() {

            const data = (await getUsers().then<Array<usersType>>())
            setUsers({...users, myUsers: data})
        }
        fetchData().then();
    }, []);
    if (!users.myUsers)
        return <div></div>

    const delUser = (id: number) => {
        if (users.myUsers)
            setUsers({...users, myUsers: users.myUsers.filter(u => u.id !== id)})
    }
    const setClass = (index: number) => {
        if (users.myUsers && users.active)
            if (users.myUsers[index] === users.active)
                return "Active"
            else return ""
    }
    const toggleActive = (index: number, toggle:boolean=true) => {
        if (users.myUsers)
            setUsers({...users, active: users.myUsers[index]})
        if(!toggle)
            setUsers({...users, active: null})
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
                    {users.myUsers.map((user, index) => {
                            return (
                                <tbody key={user.id}>
                                <tr onMouseMove={() => toggleActive(index)} className={setClass(index)} onMouseOut={()=>toggleActive(index, false)}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{shortenAddress(user.address)}
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