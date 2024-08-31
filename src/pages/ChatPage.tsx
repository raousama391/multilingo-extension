import ChatForm from "@/components/ChatForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ChatPage = () => {
  return (
    <div className="min-h-[600px] min-w-[400px] flex flex-col gap-4 rounded-lg py-5 px-3">
      <h1 className="font-bold text-lg">Multiingo</h1>
      <Separator />
      <ChatForm />
    </div>
  );
};

export default ChatPage;
