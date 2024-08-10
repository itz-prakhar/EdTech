import React from 'react'

const NotFound = () => {
  return (
<div class="custom-scrollbar flex bg-richblack-900 text-yellow-50 font-semibold text-4xl w-full h-[90vh] justify-center items-center">
  <div class="text-center">
    <p>404 Not Found</p>
    <a href="/" class="home-link mt-5 inline-block text-lg text-yellow-400 border border-yellow-400 py-2 px-4 rounded-lg hover:bg-yellow-200 hover:text-richblack-900 transition-colors duration-300">
      Go to Homepage
    </a>
  </div>
</div>

  )
}

export default NotFound
