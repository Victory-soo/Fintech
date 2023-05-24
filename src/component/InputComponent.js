import React, { useState } from "react";

const InputComponent = () => {
    const [userName, setUserName] = useState("정승수");

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setUserName(value);
    };

    const handleClick = () => {
        console.log("클릭");
    };

    return (
        <div>
            <br />
            <p>{userName}</p>
            <input onChange={handleChange} />
            <button onClick={handleClick}>이름 바꾸기</button>
        </div>
    );
};

export default InputComponent;
