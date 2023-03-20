import React, {useState} from 'react';
import Modal from "./Modal/Modal";
import Main from "./Main";
import Biznes from "./Biznes";

type callback ={
    setUser : any
    account:any
}
const IndexPage = (props:callback) => {
    const [active, setActive] = useState(true)

    return (
        < >
            <Modal active={active} setActive={setActive}/>
            <Main/>
            <Biznes setUser={props.setUser} account={props.account}/>
        </>
    );
};

export default IndexPage;