"use client";
import React, { useEffect, useState } from 'react';
import { 
    Chat, 
    useCreateChatClient, 
    Channel, 
    Window, 
    ChannelHeader, 
    MessageList, 
    MessageInput, 
    Thread 
} from 'stream-chat-react';
import { useUser } from '@clerk/nextjs';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || 'ffp8mfarh65m';

function ChatForumInner({ slug, user }) {
    // We fetch the token from our API route to keep the secret secure
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: async () => {
            const response = await fetch('/api/stream-token');
            if (!response.ok) throw new Error('Failed to fetch token');
            const data = await response.json();
            return data.token;
        },
        userData: {
            id: user.id,
            name: user.fullName || user.username || user.id,
            image: user.imageUrl,
        },
    });

    const [channel, setChannel] = useState(null);

    useEffect(() => {
        if (!client || !slug) return;

        // Initialize the channel
        const channelInstance = client.channel('livestream', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: slug.charAt(0).toUpperCase() + slug.slice(1),
        });

        // Watch the channel for new messages
        const watchChannel = async () => {
            try {
                await channelInstance.watch();
                setChannel(channelInstance);
            } catch (error) {
                console.error("Error watching channel:", error);
                // Optionally handle error in UI
            }
        };

        watchChannel();
    }, [client, slug]);

    if (!client) return <div className="p-10 text-center">Connecting to chat service...</div>;
    if (!channel) return <div className="p-10 text-center text-blue-500">Joining channel: {slug}...</div>;

    return (
        <div className="h-[calc(100vh-64px)] w-full border border-gray-200 rounded-lg shadow-sm">
            <Chat client={client} theme="str-chat__theme-light">
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    );
}

export default function ChatForum({ slug }) {
    const { user, isLoaded } = useUser();
    
    if (!isLoaded) {
        return <div className="p-10 text-center">Loading user authentication...</div>;
    }

    if (!user) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
                <p>Please sign in to join the discussion forum.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-6xl p-4">
            <ChatForumInner slug={slug} user={user} />
        </div>
    );
}
