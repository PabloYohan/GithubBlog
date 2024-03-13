import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <div>Hello world</div>
      <Outlet />
    </div>
  )
}
