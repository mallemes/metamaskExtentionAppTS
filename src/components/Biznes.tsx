import React, {useEffect, useState} from 'react';
import Users from "./Users/Users";
import {getUsers, usersType} from "../API/api";
export type usType = {
    myUsers: null | Array<usersType>,
    active: null | usersType

}

const Biznes = (props:{setUser:any, account:any}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [toggle, setToggle] = useState(false)

    const [users, setUsers] = useState<usType>({myUsers: null, active: null})
    useEffect(() => {
        async function fetchData() {
            const data = (await getUsers().then<Array<usersType>>())
            setUsers({...users, myUsers: data})
        }

        fetchData().then();
    }, []);
    const addUser = ()=>{

        if (users.myUsers){
            const a:Array<usersType> = [{id:123, email:email, username:name, address:props.account?props.account:"ssssss"}, ...users.myUsers]
            setUsers({...users, myUsers:a})
            setToggle(true)
            props.setUser({id:123, email:email, username:name, address:props.account?props.account:"???????????????????"})
        }

    }
    return (
        <div className="biznesParent">
            <div className="biznes">
                <div><h1>BETA TEST REGISTRATION</h1></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius est, ex fugit
                    illum magni nostrum pariatur placeat provident, repellat vitae? A amet cum dolores dolorum, enim
                    excepturi expedita, fuga id nemo officiis optio praesentium quo recusandae tempore totam!</p></div>
                <div>
                    <div>
                        <div>

                            <label htmlFor="tx">NAME</label>
                            <div>
                                {toggle
                                    ? <span className="registerField">{name}</span>
                                    :<input className="formInput" value={name} onChange={(e)=>setName(e.target.value)} placeholder="fuga id nemo officiis optio" type="text"/>
                                }
                            </div>
                        </div>
                        <div>
                            <label htmlFor="tx">EMAIL</label>
                            <div>
                                {toggle
                                    ? <span className="registerField">{email}</span>
                                    :<input className="formInput" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="fuga id nemo officiis optio" type="email"/>

                                }
                            </div>
                        </div>
                        <br/>
                        <button  className="connect" disabled={!email ||toggle} onClick={addUser}>GET EARLY ACCESS</button>
                    </div>
                </div>
            </div>
            <Users users={users} setUsers={setUsers} />
        </div>
    );
};

export default Biznes;