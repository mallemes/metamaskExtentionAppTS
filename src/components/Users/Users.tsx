import React, {useState} from 'react';
import {getUsers, usersType} from "../../API/api";
import style from './Users.module.css'
const Users = () => {
    const shortenAddress = (addr:any) => `${addr.slice(0, 5)}...${addr.slice(-4)}`;

    const  [onMouse, setOnMouse] = useState(false)
    const  [users, setUsers] = useState<Array<usersType>|null>(null)
    getUsers().then(res =>setUsers(res))
    if (!users){
        return <div></div>
    }
    const delUser = (id:number)=>{
        setUsers(users.filter(u => u.id != id))

    }
    return (
        <div className={style.users}>
            <div className={style.title}>

            </div>
            <div className={style.data}>

                <h2>HTML Table</h2>

                <table>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>WALLET</th>
                    </tr>
                    <hr className={style.hr}/>
                    {users.map(user =>{
                        return (
                            < >
                                <tr key={user.id} onMouseMove={() => setOnMouse(true)} className={style.onMouse + onMouse ? style.active : ""}
                                    onMouseOut={() => setOnMouse(false)}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{shortenAddress(user.address)} {onMouse ? <button className={style.delete} onClick={()=>delUser(user.id)}>X</button> : ""}</td>
                                </tr>
                                <hr className={style.hr}/>
                            </>
                        )
                        }

                    )}
                </table>



            </div>
        </div>
    );
};

export default Users;