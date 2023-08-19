import React from 'react'
import { supabase } from '../../supabaseClient'

const Button = () => {
  return (
        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-blue-gray-500 hover:bg-blue-gray-800 text-white font-semibold border-blue-200 rounded-md p-3"
        >
          Sign Out
        </button>
    
  )
}

export default Button