import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import logo from "../assets/b_logo.png";

export default function LogCard() {
  const [loading, setLoading] = useState(false)
  
  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signIn()

    if (error) {
      alert(error.error_description || error.message)
    } else {
      setLoading(false) 
    }
    
  }

  return (
    <div className="flex flex-col items-center justify-center my-33 lg:mb-5 border-solid px-4 py-2 shadow-lg">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <div className="w-[60vw] md:w-[30vw] mx-0 mb-5">
        <Auth
        onSubmit={handleLogin}
          supabaseClient={supabase}
          view="sign_up"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "green",
                  brandButtonText: "black",
                  defaultButtonText: "white",
                  defaultButtonBackground: "black",
                  defaultButtonBackgroundHover: "#020617",
                  defaultButtonBorder: "lightgray",
                },
                fontSizes: {
                  baseButtonSize: '16px',
                },
              },
            },
          }}
          // socialLayout="row"
          theme="auto"
          providers={["github"]}
        />
      </div>
    </div>
  );
}
