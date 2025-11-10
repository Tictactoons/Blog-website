"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`, // ✅ user will continue here after email link
    });

    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setMessage("A password reset link has been sent to your email.");
      setError("");
    }
  };

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md 2xl:max-w-lg mx-auto my-20 p-6 py-16 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h1 className="font-bold text-2xl md:text-[22px] text-[#1a1a1a] dark:text-white mb-5">
        Forgot Password
      </h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {message && <p className="text-green-500 mb-3">{message}</p>}

      <form onSubmit={handleResetPassword} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
