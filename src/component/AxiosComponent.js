import axios from "axios";
import React from "react";

const AxiosComponent = () => {
    const handleClick = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
            console.log(response.data);
            console.log("응답수신완료");
        });
        // console.log("응답수신완료");

        // 응답수신완료가 먼저 수신됨
        // 이유는 axios가 조금 더 오래걸려서
        // 비동기식
    };

    return <button onClick={handleClick}>요청 보내기</button>;
};

export default AxiosComponent;
