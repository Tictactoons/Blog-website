"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setMessage("Your password has been updated successfully!");
      setError("");

         setTimeout(() => {
      router.push("/login");
    }, 2000);
    }
  };

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md 2xl:max-w-lg mx-auto my-20 p-6 py-16 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h1 className="font-bold text-2xl md:text-[22px] text-[#1a1a1a] dark:text-white mb-5">
        Reset Password
      </h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {message && <p className="text-green-500 mb-3">{message}</p>}

      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3">
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
