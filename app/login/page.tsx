"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // ✅ Added state for success message

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setError("");
      setMessage("");
      window.location.href = "/"; // redirect after login
    }
  };

  // ✅ Forgot password handler
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address to reset your password.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/forgot-password`, // ✅ You can create this page later
    });

    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setError("");
      setMessage("Password reset link has been sent to your email.");
    }
  };

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md 2xl:max-w-lg mx-auto my-20 p-6 py-16 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h1 className="font-bold text-2xl md:text-[22px] text-[#1a1a1a] dark:text-white mb-5">
        Login
      </h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-500 mb-2">{message}</p>}{" "}
      {/* ✅ Success message */}
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />

        {/* ✅ Forgot password button */}
        <Link
          href="/forgot-password"
          className="text-sm text-blue-600 text-left hover:underline"
        >
          Forgot password?
        </Link>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
