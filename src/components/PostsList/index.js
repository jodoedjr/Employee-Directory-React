import React from "react";
import Table from "react-bootstrap/Table";

const PostsList = ({ display, handleSortTable}) => {
  return (
    <div className="list-overflow-container">
      {display.length ? (
        <Table responsive size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={()=>handleSortTable("email")}>Name</th>
              {/* sorting by email makes handling names with non-Roman characters */}
              <th onClick={()=>handleSortTable("phone")}>Phone</th>
              <th onClick={()=>handleSortTable("email")}>Email</th>
              <th onClick={()=>handleSortTable("dob")}>DOB</th>
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
