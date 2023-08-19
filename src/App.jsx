import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Home, AgensSqlPage } from './pages'

export default function App() {
  const [session, setSession] = useState(null);

  function HomeWrapper({ session }) {
    // Check if the user is authenticated before rendering Home page
    return session ? <Home key={session.user.id} session={session} /> : <Landing />;
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
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<HomeWrapper session={session} />} />
          <Route path="/login" element={<Landing supabaseClient={supabase} />} />
          <Route path="/agenssql" element={<AgensSqlPage session={session}/>} />
        </Routes>
      </Router>
    </div>
  );
}