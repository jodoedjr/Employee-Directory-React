import React, { useEffect } from "react";
import API from "../utils/API";
import { LOAD_EMPLOYEES } from "../utils/actions";
import { useEmployeeContext } from "../utils/GlobalState";
import { Col, Row, Container } from "../components/Grid";
import Hero from "../components/Hero";
import PostsList from "../components/PostsList";

const Home = (props) => {
    const [state, dispatch] = useEmployeeContext();

    useEffect(() => {
        console.log("LOADED HOME");
        console.log(state.AllEmployees);
        if (!state.AllEmployees) { //on load, when array is empty
            console.log("STATE.AllEmployees IS EMPTY");
            // API.getEmployeeInfo() // request info
            //     .then(res => { //call dispatch function and populate state variables
            //         dispatch({ type: LOAD_EMPLOYEES, employees: res });
            //     });
                dispatch({type: LOAD_EMPLOYEES, employees: [{_id:1}, {_id:2}, {_id:3}] });
        }
    })


    return (
        <div>
            <Hero>
                <h1>Employee Directory</h1>
                <p>Click on headings to sort, or use the search box to filter by name</p>
            </Hero>
            <Container>
                <PostsList />
            </Container>
        </div>
    )
}

export default Home;