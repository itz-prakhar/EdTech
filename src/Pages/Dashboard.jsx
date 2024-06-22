import React from 'react'

const Dashboard = () => {
    const token =localStorage.getItem('token');
    // console.log("token tooken",token)
  return (
    
    <div>
      <p className='text-yellow-50'>Dashboard</p>
    </div>
  )
}

export default Dashboard
