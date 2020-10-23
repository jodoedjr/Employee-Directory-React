import axios from "axios";

//request random employee information
//returns object with results array of 50 entries with only names, emails, dob, phone # and pictures
const getEmployeeInfo = () => {
    return axios.get("https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture");
}
export default getEmployeeInfo;