import React, { createContext, useContext, useReducer } from "react";

const employeeContext = createContext();
const { Provider } = employeeContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SORT_NAME_ASC:
        case SORT_NAME_DES:
        case FILTER_FIELD_NAME:
        case FILTER_FIELD_NUMBER:
        default:
            return state;
    }
}

const EmployeeProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        employees: value,
        subset: value
    });

    return <Provider value={[state, dispatch]} {...props}/>;
}

const useEmployeeContext = () => {
    return useContext(employeeContext);
}

export {EmployeeProvider, useEmployeeContext};