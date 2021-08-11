import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import GitUserData from './GitUserData';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
   const [listUser , setlistUser] = useState([]);
   const [isloading , setisloading] = useState(true);

   useEffect(()=>{
     const getUser = async ()=>{
         const result = await axios.get('https://api.github.com/users');
         setlistUser(result.data);
         setisloading(false);
     }
   getUser();
   },[]);
   console.log(listUser);
  return (
    <div className="app">
      {
        isloading ? <h1>Loading....</h1> : (<> <h1>Git Users Data Fetching using Axios</h1>
          <div className='container-fluid'>
            <div className="row">
             {
               listUser.map(({avatar_url , id ,login,type})=>{
                   return <GitUserData key={id} login={login} type={type} avatar_url={avatar_url}  />
               })
             }
              
            </div>
            
          </div></>)
      }
       
    </div>
  );
}

export default App;
