import React from "react";
const Profile = (props) => {
 props.img_url = 'http://via.placeholder.com/350x150'
 const style = {
     padding: '10px',
     border: '1px solid green',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '50%',
     color: '#4db1e8',
     textAlign: 'center',
     fontFamily: 'sans-serif'
 }
 return (
     <div style={style}>
         <img src={props.logo_url} height="250px"/>
         <h1>{props.title}</h1>
     </div>
 );
}
module.exports = Profile;



