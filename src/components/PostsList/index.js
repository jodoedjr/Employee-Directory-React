import React from "react";
import { ListItem, List } from "../List";
import Table from "react-bootstrap/Table";
// import { useEmployeeContext } from "../../utils/GlobalState";
// import DeleteBtn from "../DeleteBtn";
// import { Link } from "react-router-dom";
const test = [{ _id: 1, name: "test1" }, { _id: 2, name: "test2" }];

const PostsList = ({ display }) => {
  return (
    <div>
      {display.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {display.map((item, index) => (
              <tr key={index}>
                <td><img src={item.picture.thumbnail} alt="employee" className="img-responsive"/></td>
                <td>{item.name.first + " " +item.name.last}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.dob.date.substring(0,10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
          <h3>Loading!</h3>
        )}
    </div>
  );
};

export default PostsList;
