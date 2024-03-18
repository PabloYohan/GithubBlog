import { Outlet } from 'react-router-dom'
import { HeaderContainer } from './styles'
import Cover from '../../assets/Cover.svg'
import { HomeProvider } from '../../contexts/HomeContext'

export function DefaultLayout() {
  return (
    <>
      <HomeProvider>
        <HeaderContainer src={Cover} alt="" />
        <Outlet />
      </HomeProvider>
    </>
  )
}
