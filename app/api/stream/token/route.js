import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || "ffp8mfarh65m";
const apiSecret = process.env.STREAM_SECRET_KEY;

export const dynamic = "force-dynamic";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!apiSecret) {
    return NextResponse.json(
      { error: "Missing STREAM_SECRET_KEY environment variable." },
      { status: 500 }
    );
  }

  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const token = serverClient.createToken(userId);

  return NextResponse.json({ token });
}
