import React from "react";
import RegisterComponent from "~/components/auth/RegisterComponent";
import SignInComponent from "~/components/auth/SignInComponent";
import type { Route } from "./+types/Auth";


export async function clientLoader(params:Route.ClientLoaderArgs) {

  const resData = await fetch ('public/locales/en/')
}


function Auth(params:Route.ClientLoaderArgs) {
  return <div className="flex-1 flex flex-col justify-center items-center">



    <RegisterComponent />
    <SignInComponent/>
  </div>;
}

export default Auth;
