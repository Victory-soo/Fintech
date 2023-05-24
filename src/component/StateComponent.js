import React, { useState } from "react";

const StateComponent = () => {
    // let userName = "정승수";
    let [count, setCount] = useState(0);

    setInterval(() => {
        // console.log("이름 : ", userName);
        // userName = "둘리";

        console.log("카운트 세기 => ", count);
        setCount(1000);
    }, 3000);
    return <div>{count}</div>;
};

export default StateComponent;
