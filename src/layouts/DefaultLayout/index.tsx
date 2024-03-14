import { Outlet } from 'react-router-dom'
import { HeaderContainer } from './styles'
import Cover from '../../assets/Cover.svg'

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer src={Cover} alt="" />
      <Outlet />
    </>
  )
}
