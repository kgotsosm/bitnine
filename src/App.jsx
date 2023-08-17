import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './pages/Hero'
import Home from './pages/Home' 

function App() {
  const [session, setSession] = useState(null);

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
          <Route
            path="/"
            element={
              session ? (
                <Home key={session.user.id} session={session} />
              ) : (
                <Hero supabaseClient={supabase} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;