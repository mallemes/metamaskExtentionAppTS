import React, {useState} from 'react';
import {getUsers} from "../../API/api";
import style from './Users.module.css'
const Users = () => {
    const a = getUsers()
    a.then(res =>console.log(res))
    const  [onMouse, setOnMouse] = useState(false)
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
                    <tr onMouseMove={()=>setOnMouse(true)} className={onMouse? style.onMouse:""} onMouseOut={()=>setOnMouse(false)}>
                        <td>Centro comercial </td>
                        <td>Francisco Chang</td>
                        <td>Mexico {onMouse? <button className={style.delete}>X</button>:""}</td>
                    </tr>
                    <hr className={style.hr}/>
                </table>



            </div>
        </div>
    );
};

export default Users;