import React from "react";
import Table from "react-bootstrap/Table";

const PostsList = ({ display }) => {
  return (
    <div className="list-overflow-container">
      {display.length ? (
        <Table responsive size="sm" striped bordered hover>
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
