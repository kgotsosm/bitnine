import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { supabase } from './supabase/supabaseClient'
import Landing from "./pages/Landing";
import MainContent from "./pages/MainContent";

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="overflow-x-hidden overflow-y-clip bg-gray-200">
        {!session ? <Landing /> : <MainContent key={session.user.id} session={session} />}
    </div>
  );
}
