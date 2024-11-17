import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div
        id="error-page"
        className="flex flex-col justify-center items-center h-screen space-y-5"
      >
        <h1 className="text-8xl text-blue-600 font-bold">Oops!</h1>
        <p className="text-2xl font-semibold">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-3xl space-x-2 font-bold">
          <i>{error.statusText || error.message}</i>
          <span>404</span>
        </p>
        <Link
          to="/"
          className="btn bg-blue-600 text-white px-10 rounded-full"
        >
          Goo Back
        </Link>
      </div>
    </>
  )
}
