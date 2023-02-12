import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios.js';

export default function Login() {
  const { setCurrentUser, setUserToken } = UseStateContext();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({ __html: "" })

  const onSubmit = (ev) => {
    ev.preventDefault()
    setError({ __html: "" })

    axiosClient
      .post("/login", {
        email,
        password
      })
      .then(({ data }) => {
        console.log(data.user)
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch((error) => {
        if (error.response) {
          const formErrors = error.response.data.error
          setError({ __html: formErrors })
        }
        console.error(error)
      })
  }

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Ongi etorri!!
      </h2>

      {error.__html && (
        <div className='bg-red-500 rounded py-2 px-3 text-white'
          dangerouslySetInnerHTML={error}>
        </div>
      )
      }

      <form onSubmit={onSubmit} className="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              EPosta
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="EPosta"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Pasahitza
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Pasahitza"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Gogoratu
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Pasahitza ahaztu duzu?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sartu
          </button>
        </div>
      </form>

      <p className="mt-2 text-center text-sm text-gray-600">
        Or {" "}
        <Link
          to="/register"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Create a new account
        </Link>
      </p>
    </>
  )
}
