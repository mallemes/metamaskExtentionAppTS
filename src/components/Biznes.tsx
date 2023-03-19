import React from 'react';
import Users from "./Users/Users";

const Biznes = () => {
    return (
        <div className="biznesParent">
        <div className="biznes">
            <div><h1>BETA TEST REGISTRATION</h1></div>
            <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius est, ex fugit
                illum magni nostrum pariatur placeat provident, repellat vitae? A amet cum dolores dolorum, enim
                excepturi expedita, fuga id nemo officiis optio praesentium quo recusandae tempore totam!</p></div>
            <div>
                <form action="">
                    <div>

                        <label htmlFor="tx">NAME</label>
                        <div>
                            <input className="formInput" placeholder="fuga id nemo officiis optio" type="text"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tx">EMAIL</label>
                        <div>
                            <input className="formInput" placeholder="fuga id nemo officiis optio" type="text"/>
                        </div>
                    </div>
                    <br/>
                    <button className="connect"> GET EARLY ACCESS</button>
                </form>
            </div>
        </div>
            <Users/>
        </div>
    );
};

export default Biznes;