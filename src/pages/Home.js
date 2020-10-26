import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Hero from "../components/Hero";
import PostsList from "../components/PostsList";
import SearchForm from "../components/SearchForm";

const Home = (props) => {
    const [allEmployees, setAllEmployees] = useState([]);
    const [display, setDisplay] = useState([]);
    const [sorted, setSorted] = useState({
        ascending: true, //true if an item is sorted ascending, false descending
        name: false,
        phone: false,
        email: false,
        dob: false
    });
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (!(allEmployees && allEmployees.length)) { //on load, when array is empty
            API.getEmployeeInfo()
                .then(res => {
                    //res.data.results is the array of people objects
                    setAllEmployees(curr => [...curr, ...res.data.results]);
                    setDisplay(curr => [...curr, ...res.data.results]);
                })
        } else { // filter display for search
            //sets display state var to the result of calling filter on allEmployees looking for the value of search
            setDisplay(() => [...allEmployees.filter(employee => {
                let nameArray = employee.email.split("@")[0].split("."); // email field uses roman characters, name field may not
                let name = `${nameArray[0]} ${nameArray[1]}`;
                return name.indexOf(search) !== -1;
            })])
        }
    }, [allEmployees, search, sorted]); //re-run useEffect when state var search changes

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleSortTable = (input) => {
        console.log(input);
        switch (input) {
            // case "name": //name returns the same result as sort by email, but email sorts reliably for non-Roman character names
            case "phone":
                if (sorted.phone) {//if already sorted by phone, switch ascending descending   
                    setSorted({ ...sorted, ascending: !(sorted.ascending) });
                } else {
                    setSorted({ ascending: false, name: false, phone: true, email: false, dob: false });
                }
                if (sorted.ascending) {
                    setDisplay(...allEmployees.sort((a, b) => (a.phone > b.phone) ? -1 : 1))
                } else {
                    setDisplay(...allEmployees.sort((a, b) => (a.phone <= b.phone) ? -1 : 1))
                }
                return;
            case "email":
                if (sorted.email) {//if already sorted by email, switch ascending descending
                    setSorted({ ...sorted, ascending: !(sorted.ascending) });
                } else {
                    setSorted({ ...sorted, ascending: false, name: false, phone: false, email: true, dob: false });
                }
                if (sorted.ascending) {
                    setDisplay(...allEmployees.sort((a, b) => (a.email > b.email) ? -1 : 1))
                } else {
                    setDisplay(...allEmployees.sort((a, b) => (a.email <= b.email) ? -1 : 1))
                }
                return;
            case "dob":
                if (sorted.dob) {//if already sorted by name, switch ascending descending
                    setSorted({ ...sorted, ascending: !(sorted.ascending) });
                } else {
                    setSorted({ ...sorted, ascending: false, name: false, phone: false, email: false, dob: true });
                }
                if (sorted.ascending) {
                    setDisplay(...allEmployees.sort((a,b) => compareDates(true,a,b)));
                } else {
                    setDisplay(...allEmployees.sort((a,b) => compareDates(false,a,b)));
                }
                return;
            default:
                return;
        }
    }

    const compareDates = (asc,a,b) => {
        let aDate = new Date(a.dob.date);
        let bDate = new Date(b.dob.date);
        if(asc){
            return ((aDate > bDate) ? -1 : 1) // sort ascending, returns 1 if aDate is less than bDate
        } else {
            return ((aDate <= bDate) ? -1 : 1) // sort descending, returns -1 if aDate is less than bDate
        }
    }

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
                <PostsList display={display} handleSortTable={handleSortTable} />
            </Container>
        </div>
    )
}

export default Home;