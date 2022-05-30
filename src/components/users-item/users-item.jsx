import Flex from "../flex/flex.jsx";
import { Link } from "react-router-dom";
import Button from "../button/button";

import c from "./user-item.module.scss";
import { useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../store/users/users-action.js";

const UsersItem = ({
  id,
  avatar,
  followed,
  name,
  status,
}) => {

  const dispatch = useDispatch();

  const handleToggleFollow = (id) => {
    if (followed) {
      dispatch(followUser(id))
    } else {
      dispatch(unFollowUser(id))
    }
  }


  return (
    <li className={c.user_item}>
      <Flex>
        <div className={c.user_control}>
          <Link to={`/profile/${id}`} className={c.img}>
            <img
              src={
                avatar ||
                "https://static2.tgstat.ru/channels/_0/88/889f639f5169595cae856b41688b8d9b.jpg"
              }
              alt={name}
            />
          </Link>
          <Button onClick={() => handleToggleFollow(id)} type="button">
            {!followed ? "follow" : "unfollow"}
          </Button>
        </div>
        <div className={c.user_info}>
          <div className="user-box">
            <h3 style={{ marginBottom: "15px" }}>{name}</h3>
            <p>{status}</p>
          </div>
        </div>
      </Flex>
    </li>
  );
};

export default UsersItem;
