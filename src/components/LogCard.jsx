import React from "react";
import { supabase } from "../supabase/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import logo from "../assets/b_logo.png";

export default function LogCard() {

  return (
    <div className="flex flex-col items-center justify-center my-33 lg:mb-5 border-solid p-4 shadow-lg">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <div className="w-[60vw] md:w-[30vw] mx-0 mb-5">
        <Auth
          supabaseClient={supabase}
          view="sign_up"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#48B9A5",
                  brandButtonText: "black",
                  defaultButtonText: "black",
                  defaultButtonBackground: "white",
                  defaultButtonBackgroundHover: "#164e63",
                  defaultButtonBorder: "lightgray",
                },
              },
            },
          }}
          socialLayout="row"
          theme="auto"
          providers={["github", "google"]}
        />
      </div>
    </div>
  );
}