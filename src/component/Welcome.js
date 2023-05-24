const Welcome = ({ username, old }) => {
    return (
        <p>
            안녕하세요. '{username}' 님의 나이는 '{old}'세 입니다.
        </p>
    );
};

export default Welcome;
