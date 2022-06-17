import { observer } from 'mobx-react-lite'
import dialogs from '../../../mobx/dialogs'
import MembersItem from '../members-item/members-item'
import c from './members-list.module.scss'

export const MembersList = observer(() => {
  const { users } = dialogs

  return (
    <ul className={c.members_list}>
      {users.map((user) => {
        return <MembersItem key={user.id} {...user} />
      })}
    </ul>
  )
})
