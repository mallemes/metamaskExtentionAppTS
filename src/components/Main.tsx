import React from 'react';
import planet from "../planet.png";
import RoadMap from "./RoadMap";


const Main = () => {

    return (
        <div className="Main">
            <div className="mainContent">
                <div>
                    <div className="spinner-box">
                        <div className="circle-border">
                            <div className="circle-core">
                            </div>
                        </div>
                    </div>
                    <img src={planet} width="250" height="250" alt=""/>
                </div>
                <div className="text">Explore Your own planet</div>
                <div className="text"> In our New metaverse</div>
                <RoadMap/>
                <div><p className="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, explicabo, quaerat.
                    Consequuntur delectus, dolore doloremque labore, libero maxime nesciunt obcaecati praesentium
                    provident, quasi quod reiciendis.</p></div>
            </div>

        </div>
    );
};
//  0xeA2fd85E31bbeA0ce8D74C390bD9C8a050633f14



export default Main;