import Flex from "../flex/flex.jsx";
import { Link } from "react-router-dom";
import Button from "../button/button";

import c from "./user-item.module.scss";

const UsersItem = ({
  toggleFollow,
  id,
  avatar,
  followed,
  name,
  status,
  online,
}) => {
  const getTime = (date) => {
    const currentTime = new Date();

    return Math.floor((currentTime - new Date(date)) / 1000 / 60 / 60);
  };

  return (
    <li className={c.user_item}>
      <Flex>
        <div className={c.user_control}>
          <Link to={`${id}`} className={c.img}>
            <img
              src={
                avatar ||
                "https://static2.tgstat.ru/channels/_0/88/889f639f5169595cae856b41688b8d9b.jpg"
              }
              alt={name}
            />
          </Link>
          <Button onClick={() => toggleFollow(id)} type="button">
            {followed ? "follow" : "unfollow"}
          </Button>
        </div>
        <div className={c.user_info}>
          <div className="user-box">
            <h3 style={{ marginBottom: "15px" }}>{name}</h3>
            <p>{status}</p>
          </div>
          <div className="user-box">
            <div>{getTime(online)} ч назад</div>
          </div>
        </div>
      </Flex>
    </li>
  );
};

export default UsersItem;
