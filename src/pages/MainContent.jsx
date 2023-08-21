import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'

const MainContent = ({session}) => {
  return (
    <div>
        <Navbar session={session} />
        Welcome! {session.user.email} 
    </div>
  )
}

export default MainContent