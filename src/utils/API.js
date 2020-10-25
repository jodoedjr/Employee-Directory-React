import axios from "axios";

export default{
    //request random employee information
    //returns object with results array of 50 entries with only names, emails, dob, phone # and pictures
    getEmployeeInfo = () => {
        return axios.get("https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture");
    }
}
