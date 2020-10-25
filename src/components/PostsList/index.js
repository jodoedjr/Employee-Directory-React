import React from "react";
import { ListItem, List } from "../List";
import { useEmployeeContext } from "../../utils/GlobalState";
// import DeleteBtn from "../DeleteBtn";
// import { Link } from "react-router-dom";
const test = [{_id: 1, name:"test1"}, {_id:2,name:"test2"}];
let num = 0;
const PostsList = () => {
  const [state, dispatch] = useEmployeeContext();
  return (
    <div>
      {/* Replace test with the appropriate arrays */}
      {state.display.length ? (
        <List>
          {state.display.map(post => (
            <ListItem key={post._id}>
              {num}
              {/* <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link> */}
              {/* <DeleteBtn onClick={() => {}} /> */}
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        {/* <Link to="favorites">View favorites</Link> */}
      </div>
    </div>
  );
};

export default PostsList;
