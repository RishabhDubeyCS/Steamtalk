import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

const Chat = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="bg-purple-100 dark:bg-purple-900/20 p-6 rounded-full mb-6">
        <MessageSquare className="w-12 h-12 text-purple-600" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Direct Messaging Coming Soon</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        We're currently working on a personal chat feature. In the meantime, 
        feel free to join the discussion in our community forums!
      </p>
      <Link href="/forums">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Explore Forums
        </Button>
      </Link>
    </div>
  );
}

export default Chat;
