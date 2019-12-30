import React from "react";

const Curiosity = ({imgSrc, fullName, camera}) => {
    return(
        <div>
            <h1>{fullName}</h1>
            <p>{camera}</p>
            <img src={imgSrc} alt="img-was-here"/>
        </div>
    )
}

export default Curiosity;