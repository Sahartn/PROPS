import React from 'react';
import './App.css';
import Profile from './profile/Profile.js';



function App(){
    let FullName = 'sahar'           /*alert(x) */ 
    const HandleName =() =>{alert (FullName)}
    return (
        <div className='App'>
            <Profile fullName={FullName} profession='web' bio='A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#) or Java in the server, and http for communications between client and server. A web content management system is often used to develop and maintain web applications.

' HandelName={HandleName}>
<img src="./public/img.PNG" stlyle={{width:'200px', height:'200px'}} />       
     </Profile>
        </div>
    );
}
export default App ;