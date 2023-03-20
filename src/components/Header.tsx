import React from 'react';
import {NavLink} from "react-router-dom";
import {useEthers} from "@usedapp/core";

const shortenAddress = (addr:string) => `${addr.slice(0, 5)}...${addr.slice(-4)}`;

type propsType ={
    setAccount: any,
}

const Header = (props:propsType) => {


    const { activateBrowserWallet, account } = useEthers();
    if (account)
        props.setAccount(account)
    return (
        <div className="navbar">
            <button className="logo"><NavLink to={'/'} className="link">LOGO</NavLink></button>
            {!account ?  <button className="connect" onClick={()=>activateBrowserWallet()}>CONNECT METAMASK</button> : <NavLink to={'/profile'}>{shortenAddress(account)}</NavLink> }
        </div>
    );
};


export default React.memo(Header);