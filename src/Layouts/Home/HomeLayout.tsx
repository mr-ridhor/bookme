
import { Outlet } from 'react-router-dom'

export const HomeLayout = () => {
  return (
    <div className='w-screen h-screen'>
        <Outlet/>
    </div>
  )
}
