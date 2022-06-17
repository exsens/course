import React from 'react'
import styles from './profile-avatar.module.scss'

const ProfileAvatar = ({ src, width, height }) => {
  return (
    <div className={styles.img}>
      <img
        src={src || 'https://yur-info.ru/media/k2/items/cache/e02fde07d49ee258cc3f6d1b19207757_XL.jpg'}
        alt="dog"
        width={width}
        height={height}
        style={{ width, height }}
      />
    </div>
  )
}

export default ProfileAvatar
