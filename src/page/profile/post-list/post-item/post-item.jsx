import s from './post-item.module.scss'

const PostItem = ({ postsData }) => {
  const { avatar, text } = postsData;

  return (
    <li className={s.item}>
      <img
        src={avatar}
        alt="avatar"/>
      <span>{text}</span>
    </li>
  )
}

export default PostItem