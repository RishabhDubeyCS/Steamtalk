import { StreamChat } from 'stream-chat';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || 'ffp8mfarh65m';
    const apiSecret = process.env.STREAM_SECRET || process.env.STREAM_SECRET_KEY;

    if (!apiSecret) {
        return NextResponse.json(
            { error: "Missing STREAM_SECRET or STREAM_SECRET_KEY environment variable." },
            { status: 500 }
        );
    }

    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    // Create a user token
    const token = serverClient.createToken(userId);

    return NextResponse.json({ token });
}
