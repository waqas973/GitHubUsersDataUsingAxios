import React from 'react';
import './App.css';

function GitUserData({avatar_url,login,type}) {
    return (
        avatar_url && 
        <div className="col-lg-4 col-md-6 mb-4">
             <div className="card__container">
               <div className="img__container">
                 <img src={avatar_url} alt="" />
               </div>
               <div className="info__container">
                 <h3>{login}</h3>
                 <p>{type}</p>
                 <div className="bio">
                      <div className="wrapper">
                        <h4>follower</h4>
                        <p>345</p>
                      </div>
                      <div className="wrapper">
                        <h4>following</h4>
                        <p>45</p>
                      </div>
                      <div className="wrapper">
                        <h4>Glists</h4>
                        <p>80</p>
                      </div>
                 </div>
               </div>
             </div>
           </div>
    )
}

export default GitUserData;
