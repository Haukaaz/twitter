"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {

  const {data: session} = useSession();

  if (session) {
    return redirect('/app');
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-4 text-center">
        <div className="flex justify-center">
          <img src="https://static.vecteezy.com/system/resources/previews/023/986/731/non_2x/twitter-logo-twitter-logo-transparent-twitter-icon-transparent-free-free-png.png" className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-semibold">Happening now</h1>
        <h2 className="text-xl">Join today</h2>
        <button className="bg-blue-400 p-2 text-white rounded-full hover:bg-blue-500 transition duration-300" onClick={() => signIn('github')}>Sign In with GitHub</button>
        <p className="text-sm">Don't have a GitHub account yet? Sign up <a href="https://github.com" target="_blank" className="underline">here</a>.</p>
      </div>
    </div>
  );
}
