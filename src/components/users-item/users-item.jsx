import { useDispatch, useSelector } from "react-redux";
import { toggleFollowingProgress } from "../../store/users/users-action";
import { toggleFollowUser } from "../../store/users/users-thunk";
import { selectAuthData } from "../../store/auth/auth-select";

import Flex from "../flex/flex";
import { Link } from "react-router-dom";
import Button from "../common/button/button";

import c from "./user-item.module.scss";

// interface UserItemProps extends Users {
//   followingInProgress: number | number[]
// }
// : React.FC<UserItemProps>

const UsersItem = ({
  id,
  photos: { small: avatar },
  followed,
  name,
  status,
  followingInProgress,
}) => {
  const dispatch = useDispatch();
  const { isAuth, userId } = useSelector(selectAuthData);
  const isSelfUser = userId === id;

  const handleToggleFollow = (id) => {
    console.log(followed, 'item')
    dispatch(toggleFollowUser(id, followed));
    dispatch(toggleFollowingProgress(id));
  };

  return (
    <li className={c.user_item}>
      <Flex>
        <div className={c.user_control}>
          <Link to={`/profile/${id}`} className={c.img}>
            <img
              src={
                avatar ||
                "https://yur-info.ru/media/k2/items/cache/e02fde07d49ee258cc3f6d1b19207757_XL.jpg"
              }
              alt={name}
            />
          </Link>
          {isAuth && (
            <Button
              disabled={
                isSelfUser || followingInProgress.some((el) => el === id)
              }
              onClick={() => handleToggleFollow(id)}
              type="button"
            >
              {!followed ? "follow" : "unfollow"}
            </Button>
          )}
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
