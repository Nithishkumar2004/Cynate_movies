import React from 'react'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
  const navigate = useNavigate(); 
  return (<section className="bg-white dark:bg-gray-900">
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-8 sm:px-4 lg:py-16 lg:px-6 min-h-svh">

      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">No results found</p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>

        <button onClick={()=>{navigate("/home");}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back to home page</button>
      </div>
    </div>
  </section>
  )
}

export default PageNotFound