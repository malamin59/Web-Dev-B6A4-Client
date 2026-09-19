"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import {
  Pencil,
  Sparkles,
  Camera,
  ShieldCheck,
  User,
  Shield,
  KeyRound,
  History,
  CheckCircle2,
  LogOut,
  Mail
} from "lucide-react";

// Typescript interface extension for NextAuth user properties
interface ExtendedUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  provider?: string;
  createdAt?: string;
  securityRating?: string;
  connectedAppsCount?: number;
  lastLoginIp?: string;
}

export default function AccountProfile() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("personal");

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session || !session.user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white p-4">
        <div className="p-8 text-center bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl max-w-sm w-full">
          <p className="text-zinc-400 font-medium">You are not logged in.</p>
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

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Page Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Account Settings & Profile
            </h1>
            <p className="text-sm text-zinc-400 mt-0.5">
              Manage your personal details, connected providers, and security preferences.
            </p>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded-xl border border-zinc-700/60 transition flex items-center gap-2">
              <Pencil className="w-3.5 h-3.5" />
              Edit Profile
            </button>

            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              Upgrade
            </button>

            <button
              onClick={() => signOut()}
              className="p-2 bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-800/40 rounded-xl transition"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Card Profile Banner Container */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Top Purple Gradient Banner */}
          <div className="h-44 sm:h-52 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 relative p-4 flex justify-end items-start">
            <button className="px-3 py-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-xl border border-white/20 transition flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              Change Cover
            </button>
          </div>

          {/* Profile Details Overlay Section */}
          <div className="px-6 sm:px-8 pb-8 relative">
            
            {/* Avatar & Badges Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-16 sm:-mt-20 mb-6 gap-4">
              
              {/* Floating Large Avatar */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-zinc-900 p-1.5 ring-1 ring-zinc-800 shadow-2xl">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User Avatar"}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                      {initials}
                    </div>
                  )}
                </div>
                {/* Active Status Indicator */}
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 ring-4 ring-zinc-900 rounded-full" />
              </div>

              {/* Title & Account Name */}
              <div className="flex-1 sm:ml-4 sm:mb-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {user?.name || "User Account"}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 rounded-full text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Account
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-1 font-mono">
                  {user?.email || "No email linked"}
                </p>
              </div>

              {/* Role & OAuth Badges */}
              <div className="flex items-center gap-2 mb-2">
                {user?.role && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/60 text-xs font-semibold capitalize">
                    <Shield className="w-3.5 h-3.5" />
                    {user.role}
                  </span>
                )}

                {user?.provider && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700/60 text-xs font-medium capitalize">
                    <KeyRound className="w-3.5 h-3.5 text-indigo-400" />
                    {user.provider}
                  </span>
                )}
              </div>
            </div>

            {/* Metrics Dashboard Box */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-zinc-950/60 rounded-2xl border border-zinc-800/80">
              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  ACCOUNT CREATED
                </p>
                <p className="text-base font-bold text-white">
                  {user?.createdAt ? user.createdAt : "N/A"}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  SECURITY RATING
                </p>
                <p className="text-base font-bold text-emerald-400">
                  {user?.securityRating ? user.securityRating : "Active"}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  CONNECTED APPS
                </p>
                <p className="text-base font-bold text-white">
                  {user?.connectedAppsCount !== undefined ? `${user.connectedAppsCount} Active` : "1 Active"}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  LAST SIGN-IN
                </p>
                <p className="text-base font-bold text-white truncate">
                  Active Session
                  {user?.lastLoginIp && (
                    <span className="text-xs font-normal text-zinc-400 ml-1">({user.lastLoginIp})</span>
                  )}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Navigation Underline Style */}
        <div className="border-b border-zinc-800 flex items-center gap-8 text-sm font-medium pt-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("personal")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === "personal"
                ? "border-purple-500 text-purple-400 font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <User className="w-4 h-4" />
            Personal Information
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === "security"
                ? "border-purple-500 text-purple-400 font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Security & Authentication
          </button>

          <button
            onClick={() => setActiveTab("providers")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === "providers"
                ? "border-purple-500 text-purple-400 font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <KeyRound className="w-4 h-4" />
            Connected Providers
          </button>

          <button
            onClick={() => setActiveTab("activity")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === "activity"
                ? "border-purple-500 text-purple-400 font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <History className="w-4 h-4" />
            Activity Logs
          </button>
        </div>

        {/* Active Tab Content Area */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
          {activeTab === "personal" && (
            <div className="space-y-4 max-w-xl">
              <h3 className="text-lg font-semibold text-white">Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-zinc-950/50 rounded-xl border border-zinc-800">
                  <p className="text-xs text-zinc-400">Full Name</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{user?.name || "Not provided"}</p>
                </div>
                <div className="p-3 bg-zinc-950/50 rounded-xl border border-zinc-800">
                  <p className="text-xs text-zinc-400">Email Address</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{user?.email || "Not provided"}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="text-zinc-400 text-sm space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">Security Preferences</h3>
              <p>Authentication handled via standard session token.</p>
            </div>
          )}

          {activeTab === "providers" && (
            <div className="text-zinc-400 text-sm space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">Connected Providers</h3>
              <p>
                Active Provider: <span className="text-white font-medium capitalize">{user?.provider || "Standard Auth"}</span>
              </p>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="text-zinc-400 text-sm space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">Activity History</h3>
              <p>Current active session started upon login.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}