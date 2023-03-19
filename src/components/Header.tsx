import React from 'react';
import {useEthers} from "@usedapp/core";
const shortenAddress = (addr:any) => `${addr.slice(0, 5)}...${addr.slice(-4)}`;


const Header = () => {
    const { activateBrowserWallet, account } = useEthers();

    return (
        <div className="navbar">
            <button className="logo">LOGO</button>
            {!account ?  <button className="connect" onClick={() => activateBrowserWallet()}>CONNECT METAMASK</button> : ` ${shortenAddress(account)}`}


        </div>
    );
};

export default Header;