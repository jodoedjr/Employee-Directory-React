import React, { createContext, useContext, useReducer } from "react";
import {LOAD_EMPLOYEES, SORT_NAME_ASC, SORT_NAME_DES, FILTER_FIELD_NAME, FILTER_FIELD_NUMBER} from "./actions";
const employeeContext = createContext();
const { Provider } = employeeContext;

const reducer = (state, action) => {
    console.log("REDUCER CALLED");
    switch (action.type) {
        case LOAD_EMPLOYEES:
            console.log("LOADING EMPLOYEES");
            console.log(action);
            return {...state, allEmployees: action.employees, display: action.employees}
        case SORT_NAME_ASC:
            //sorts first names a-z
            return {...state, 
                allEmployees: state.allEmployees.sort((a,b) => (a.name.first > b.name.first) ? 1 : -1),
                display: state.display.sort((a,b) => (a.name.first > b.name.first) ? 1 : -1)
            }
        case SORT_NAME_DES:
            //reverse of above, sorts first names z-a
            return {...state, 
                allEmployees: state.allEmployees.sort((a,b) => (a.name.first > b.name.first) ? -1 : 1),
                display: state.display.sort((a,b) => (a.name.first > b.name.first) ? -1 : 1)
            }
        case FILTER_FIELD_NAME:
            // returns a copy of allEmployees filtered for action.filter
            return {...state, display: state.allEmployees.filter(employee => {
                let name = `${employee.name.first} ${employee.name.last}`;
                return name.indexOf(action.filter) === -1;
            })}
        case FILTER_FIELD_NUMBER:
        default:
            return state;
    }
}

const EmployeeProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        allEmployees: value,
        display: value
    });

    return <Provider value={[state, dispatch]} {...props}/>;
}

const useEmployeeContext = () => {
    return useContext(employeeContext);
}

export {EmployeeProvider, useEmployeeContext};