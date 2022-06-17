import { Outlet } from 'react-router-dom'
import Routing from '../../routes/index'
import c from './content.module.scss'

const Content = () => {
  return (
    <main className={c.inner}>
      <Outlet />
      <Routing />
    </main>
  )
}

export default Content
