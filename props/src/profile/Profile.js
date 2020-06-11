
import React from 'react'
import PropTypes from 'prop-types'; 



function Profile(props) {
    return (
        <div>
           <h1>{props.fullName}</h1>
           <h2>{props.profession}</h2>
           <h3>{props.bio}</h3>
            <button onClick={props.handleName}>Click Here</button>
            <div>{props.children}</div>
        </div>
    );
};


Profile.defaultProps ={
    fullName :"name here",
    profession : "profession here ",
    bio : " bio here. wirte somthing intersting "
}
Profile.propTypes={
    fullName : PropTypes.string ,
    profession : PropTypes.string,
    bio : PropTypes.string,
}
export default Profile;