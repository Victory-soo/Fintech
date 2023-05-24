import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
    background: white;
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    margin: 0 1em;
    padding: 0.25em 1em;
    width: 200px;
    height: 200px;
`;

const StyledComponent = () => {
    return (
        <div>
            StyledComponent
            <MyButton />;
        </div>
    );
};

export default StyledComponent;
