import React from 'react';
import planet from "../planet.png";

const Profile = () => {
    return (
        <div>
         <div className="personalData">
            <div>
                 <span className="ProfileTitle">PERSONAL DATA</span>
            </div>
             <div className="data">
                 <div className="items">
                     <div>NAME</div>
                     <div><span className="field">ERJAN</span></div>
                 </div>
                 <div className="items">
                     <div>EMAIL</div>
                     <div><span className="field">TALGAR</span></div>
                 </div>
                 <div className="items">
                     <div>WALLET</div>
                     <div><span className="field">OZBEK</span></div>
                 </div>
             </div>
         </div>
            <div className="planet">
                <div className="spinner-box">
                    <div className="circle-border">
                        <div className="circle-core">
                        </div>
                    </div>
                </div>
                <img src={planet} width="250" height="250" alt=""/>
            </div>
        </div>
    );
};

export default Profile;