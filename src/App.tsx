import React, {useState} from 'react';
import './App.css';
import IndexPage from "./components/IndexPage";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Profile from "./components/Profile";
import {DAppProvider, Rinkeby} from "@usedapp/core";
import {getDefaultProvider} from "ethers";
import {usersType} from "./API/api";
const config = {
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
        [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
    },
}

function App() {
    const [currentUser, setCurrentUser] = useState(null as usersType|null)
    console.log(currentUser)
    return (
        <div className="App">
            {/*<DAppProvider config={config}>*/}
                <Header/>
            {/*</DAppProvider>*/}
            <Routes>
                <Route path='/' element={<IndexPage setUser={setCurrentUser}/>}/>
                <Route path='/profile'  element={<Profile user={currentUser}/>}/>
            </Routes>
        </div>
    );
}

export default App;


//https://medium.com/coinmonks/connect-browser-wallet-with-usedapp-f090212eb882 connect metamask