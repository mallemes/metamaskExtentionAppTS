import React from 'react';
import planet from "../planet.png";
import {usersType} from "../API/api";
type props ={
    user: usersType|null
}
const Profile = (props:props) => {
    localStorage.clear()
    if (!props.user)
        return <div></div>

    return (
        <div>
         <div className="personalData">
            <div>
                 <span className="ProfileTitle">PERSONAL DATA</span>
            </div>
             <div className="data">
                 <div className="items">
                     <div>NAME</div>
                     <div><span className="field">{props.user.username}</span></div>
                 </div>
                 <div className="items">
                     <div>EMAIL</div>
                     <div><span className="field">{props.user.email}</span></div>
                 </div>
                 <div className="items">
                     <div>WALLET</div>
                     <div><span className="field">{props.user.address}</span></div>
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