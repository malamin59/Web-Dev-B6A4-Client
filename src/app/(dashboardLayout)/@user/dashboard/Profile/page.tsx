"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { 
  User, 
  Mail, 
  ShieldCheck, 
  KeyRound, 
  Pencil, 
  LogOut, 
  CheckCircle2 
} from "lucide-react";

// TypeScript interface extension for NextAuth user session properties
interface ExtendedUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  provider?: string;
}

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
        <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session || !session.user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4">
        <div className="p-8 text-center bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-sm w-full">
          <p className="text-zinc-600 dark:text-zinc-400 font-medium">You are not logged in.</p>
        </div>
      </div>
    );
  }

  const user = session.user as ExtendedUser;
  
  const initials = user?.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U";

  const infoRows = [
    { label: "Full Name", value: user?.name, icon: User },
    { label: "Email Address", value: user?.email, icon: Mail },
    { label: "Auth Provider", value: user?.provider, icon: KeyRound },
    { label: "Account Role", value: user?.role, icon: ShieldCheck },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 font-sans">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-none overflow-hidden transition-all">
        
        {/* Cover Gradient Banner */}
        <div className="h-28 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 relative" />

        {/* Profile Content Container */}
        <div className="px-6 pb-6 relative">
          
          {/* Avatar & Badges Header */}
          <div className="flex justify-between items-end -mt-12 mb-4">
            <div className="relative">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User Avatar"}
                  width={88}
                  height={88}
                  className="w-22 h-22 rounded-2xl object-cover ring-4 ring-white dark:ring-zinc-900 shadow-md"
                />
              ) : (
                <div className="w-22 h-22 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white dark:ring-zinc-900 shadow-md">
                  {initials}
                </div>
              )}
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 ring-2 ring-white dark:ring-zinc-900 rounded-full" />
            </div>

            {/* Badges */}
            <div className="flex gap-2">
              {user?.role && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50 capitalize">
                  {user.role}
                </span>
              )}
              {user?.provider && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50 capitalize">
                  <CheckCircle2 className="w-3 h-3" />
                  {user.provider}
                </span>
              )}
            </div>
          </div>

          {/* User Name & Email */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {user?.name || "User Profile"}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
              {user?.email || "No email provided"}
            </p>
          </div>

          {/* Information Rows */}
          <div className="space-y-2 bg-zinc-50/70 dark:bg-zinc-800/30 p-3.5 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 mb-6">
            {infoRows.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-white dark:hover:bg-zinc-800/80 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      {row.label}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-[180px]">
                    {row.value || "—"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            <button className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2">
              <Pencil className="w-3.5 h-3.5" />
              Edit Profile
            </button>
            <button
              onClick={() => signOut()}
              className="w-full py-2.5 px-4 bg-transparent hover:bg-red-50/60 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/50 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}