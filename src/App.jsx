import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Landing from './pages/Landing'
import MainContent from './pages/MainContent'

export default function App() {
  const [session, setSession] = useState(null);

  function HomeWrapper({ session }) {
    // Check if the user is authenticated before rendering Home page
    return session ? <MainContent key={session.user.id} session={session} /> : <Landing />;
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-gray-200">
      <Router>
        <Routes>
          <Route path="/" element={<HomeWrapper session={session} />} />
        </Routes>
      </Router>
    </div>
  );
}