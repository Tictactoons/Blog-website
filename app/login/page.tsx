'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthButton() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Check session on mount
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };

    getUser();

    // Optional: subscribe to auth changes (auto-update UI on login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  // Show Logout if signed in, Login if not
  return user ? (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
    >
      Logout
    </button>
  ) : (
    <Link
      href="/login"
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      Login
    </Link>
  );
}
