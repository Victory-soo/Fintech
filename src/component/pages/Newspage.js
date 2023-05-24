import axios from "axios";
import React, { useState } from "react";
import HeaderTitle from "../News/HeaderTitle";
import NewsList from "../News/NewsList";
import SearchInput from "../News/SearchInput";

const Newspage = () => {
    const [search, setSearch] = useState("검색어");
    const [newsList, setNewsList] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    const handleClick = () => {
        console.log(search);
        axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-04-24&sortBy=publishedAt&apiKey=5618393c441847f4a04f0fae391e83cc`).then((response) => {
            console.log(response.data);
            setNewsList(response.data.articles);
        });
    };

    return (
        <div>
            <HeaderTitle title={"뉴스검색"}></HeaderTitle>
            <SearchInput handleChange={handleChange} handleClick={handleClick} />
            <NewsList newsList={newsList} />
        </div>
    );
};

export default Newspage;
