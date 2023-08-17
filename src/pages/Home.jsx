import React from "react";
import { supabase } from "../supabaseClient";
import { Button } from "@material-tailwind/react";

export default function Home({ session }) {
  console.log(session);
  return (
    <div>
      Signed in! Your email is: {session.user.email}
      <div>
        <Button 
           onClick={() => supabase.auth.signOut()}
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-bodyRed cursor-none">
                Sign Out
                </Button>
      </div>
    </div>
    )
}
