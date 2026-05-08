"use client";

import TutorForm from "./TutorForm";

export default function TutorProfilePage() {
  return (
    <div className="max-w-xl mx-auto mt-10 border rounded-xl p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Create Tutor Profile</h1>
      <TutorForm />
    </div>
  );
}
