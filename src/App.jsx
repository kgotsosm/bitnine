import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './pages/Hero';
import Home from './pages/Home';

export default function App() {
  const [session, setSession] = useState(null);

  function HomeWrapper({ session }) {
    // Check if the user is authenticated before rendering Home page
    return session ? <Home key={session.user.id} session={session} /> : <Hero />;
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
          <Route path="/login" element={<Hero supabaseClient={supabase} />} />
        </Routes>
      </Router>
    </div>
  );
}