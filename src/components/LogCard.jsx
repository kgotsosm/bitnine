import React from "react";
import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import logo from "../assets/b_logo.png";

export default function LogCard() {

  
  return (
    <div className="flex flex-col items-center justify-center my-33 lg:mb-5">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <div className="w-[60vw] md:w-[30vw] mx-0 mb-5">
        <Auth
          supabaseClient={supabase}
          view="sign_in"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brandButton: "#48B9A5",
                  brandButtonText: "black",
                  defaultButtonBackground: "black",
                  defaultButtonBorder: "lightgray",
                  defaultButtonText: "white",
                  inputBackground: "transparent",
                  inputBorder: "lightgray",
                  inputBorderHover: "gray",
                  inputBorderFocus: "gray",
                  inputText: "black",
                  inputLabelText: "gray",
                  inputPlaceholder: "darkgray",
                  messageText: "black",
                  messageTextDanger: "red",
                  anchorTextColor: "gray",
                  anchorTextHoverColor: "black",
                },
              },
            },
          }}
          theme="auto"
          providers={["github"]}
        />
      </div>
    </div>
  );
}
