import s from "./post-item.module.scss";

const PostItem = ({ postsData, avatar }) => {
  const { text } = postsData;

  return (
    <li className={s.item}>
      <img
        src={
          avatar
            ? avatar
            : "https://yur-info.ru/media/k2/items/cache/e02fde07d49ee258cc3f6d1b19207757_XL.jpg"
        }
        alt="avatar"
      />
      <span>{text}</span>
    </li>
  );
};

export default PostItem;
