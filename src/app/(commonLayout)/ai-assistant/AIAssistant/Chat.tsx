"use client";

import { Message } from "@/types/ai";
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import EmptyState from "./EmptyState";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import axiosInstance from "@/app/service/axios";


export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

 async function sendMessage(text: string) {
  if (!text.trim() || loading) return;

  const userMessage: Message = {
    id: crypto.randomUUID(),
    role: "user",
    content: text,
  };

  
  setMessages((prev) => [...prev, userMessage]);
  setLoading(true);

  try {
    const { data } = await axiosInstance.post("/ai/chat", {
      message: text,
    });

    // TODO
    const aiMessage: Message = {                
      id: crypto.randomUUID(),                
      role: "assistant",                
      content: data.reply,                
    };
// TODO
    setMessages((prev) => [...prev, aiMessage]);
  } catch (error) {
    console.error(error);

    const errorMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: " Sorry, something went wrong. Please try again.",
    };

    setMessages((prev) => [...prev, errorMessage]);
  } finally {
    setLoading(false);
  }
}
  

  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-col">
      <ChatHeader />

      {messages.length === 0 ? (
        <EmptyState onQuestionClick={sendMessage} />
      ) : (
        <ChatMessages
          messages={messages}
          loading={loading}
        />
      )}

      <ChatInput
        loading={loading}
        onSend={sendMessage}
      />
    </div>
  );
}