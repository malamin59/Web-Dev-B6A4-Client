
    "use client";
    import { useSession, signOut } from "next-auth/react";
    import Image from "next/image";
    
    export default function UserProfile() {
         const { data: session } = useSession();
      if (!session) return <p>Not logged in</p>;
    console.log(session)
      const user = session.user
      const initials = user.name
        ?.split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    
      return (
        <div className=" flex justify-center items-center min-h-screen">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              {user.image ? (
                <Image src={user.image} alt="avatar" width={88} height={88}
                  className="rounded-full border-2 border-purple-300" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-2xl font-medium border-2 border-purple-300">
                  {initials}
                </div>
              )}
              <div>
                <p className="text-lg font-medium text-zinc-900 dark:text-white">{user.name}</p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">{user.role}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">{user.provider}</span>
                </div>
              </div>
            </div>
    
            {/* Info rows */}
            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 space-y-3">
              {[
                { label: "Full name", value: user.name },
                { label: "Email address", value: user.email },
                { label: "Provider", value: user.provider },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                  <p className="text-xs text-zinc-500 w-28 shrink-0">{row.label}</p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">{row.value || "—"}</p>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <button className="w-full mt-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition">
              Edit profile
            </button>
            <button onClick={() => signOut()} className="w-full mt-2 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium rounded-xl transition">
              Sign out
            </button>
          </div>
        </div>
      );
    }