import ProfileAvatar from '../../profile-avatar/profile-avatar.jsx'
import s from './post-item.module.scss'

const PostItem = ({ postsData, src }) => {
  const { text } = postsData

  return (
    <li className={s.item}>
      <ProfileAvatar src={src} width={'50px'} height={'50px'} />
      <span>{text}</span>
    </li>
  )
}

export default PostItem
