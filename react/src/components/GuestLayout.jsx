import { Navigate, Outlet } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { UseStateContext } from '../contexts/ContextProvider'

export default function GuestLayout() {
  const { userToken } = UseStateContext()

  if (userToken) {
    return <Navigate to='dashboard' />
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-full"
              src={logo}
              alt="Urretxu"
            />
          </div>

          <Outlet />

        </div>
      </div>
    </>
  )
}