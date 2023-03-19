import React, {useState} from 'react';
import Modal from "./Modal/Modal";
import Main from "./Main";
import Biznes from "./Biznes";

const IndexPage = () => {
    const [active, setActive] = useState(true)

    return (
        < >
            <Modal active={active} setActive={setActive}/>
            <Main/>
            <Biznes/>
        </>
    );
};

export default IndexPage;