import React from "react";
import { supabase } from "../supabaseClient";
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
                  brand: "green",
                  brandButtonText: "black",
                  defaultButtonText: "white",
                  defaultButtonBackground: "black",
                  defaultButtonBackgroundHover: "#020617",
                  defaultButtonBorder: "lightgray",
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