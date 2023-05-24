import React, { useState } from "react";

const ListComponent = () => {
    const [list, setList] = useState([
        { username: "홍길동", age: 33, height: 183 },
        { username: "고길동", age: 43, height: 193 },
        { username: "두울리", age: 53, height: 203 },
    ]);
    return (
        <div>
            {list.map((el) => {
                return (
                    <>
                        <p>이름 : {el.username}</p>
                        <p>나이 : {el.age}</p>
                        <p>키이 : {el.height}</p>
                    </>
                );
            })}
        </div>
    );
};

export default ListComponent;
