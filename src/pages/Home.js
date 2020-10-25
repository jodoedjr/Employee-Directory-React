import React, { useEffect, useState, useRef, useReducer } from "react";
import API from "../utils/API";
import { LOAD_EMPLOYEES } from "../utils/actions";
import { Col, Row, Container } from "../components/Grid";
import Hero from "../components/Hero";
import PostsList from "../components/PostsList";
import SearchForm from "../components/SearchForm";

const Home = (props) => {
    const [allEmployees, setAllEmployees] = useState([]);
    const [display, setDisplay] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("useEffect");
        if (!(allEmployees && allEmployees.length)) { //on load, when array is empty
            API.getEmployeeInfo()
                .then(res => {
                    //res.data.results is the array of people objects
                    setAllEmployees(curr => [...curr, ...res.data.results]);
                    setDisplay(curr => [...curr, ...res.data.results]);
                })
        }
    }, [search])

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <Hero>
                <h1>Employee Directory</h1>
                <p>Click on headings to sort, or use the search box to filter by name</p>
            </Hero>
            <Container>
                <SearchForm
                    handleInputChange={handleInputChange}
                    results={search}
                />
                <PostsList display={display} />
            </Container>
        </div>
    )
}

export default Home;