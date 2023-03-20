import React from 'react';
import './App.css';
import IndexPage from "./components/IndexPage";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Profile from "./components/Profile";
import {DAppProvider, Rinkeby} from "@usedapp/core";
import {getDefaultProvider} from "ethers";
const config = {
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
        [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
    },
}
function App() {
    return (
        <div className="App">
            {/*<DAppProvider config={config}>*/}
                <Header/>
            {/*</DAppProvider>*/}
            <Routes>
                <Route path='/' element={<IndexPage/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;


//https://medium.com/coinmonks/connect-browser-wallet-with-usedapp-f090212eb882 connect metamask