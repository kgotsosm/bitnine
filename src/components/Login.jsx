import React from 'react';
import { supabase } from '../supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import logo from '../assets/b_logo.png';

function Login() {
    return (
        <div className="flex flex-col items-center my-12  justify-center md:w-[35vw]">
            <div className="mb-4">
                <img src={logo} alt="Logo" />
            </div>
            <div className="w-[40vw] md:w-[30vw]">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    providers=""
                />
            </div>
        </div>
    );
}

export default Login;
