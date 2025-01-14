import { NextResponse } from 'next/server';
import { builder } from "@builder.io/sdk";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  builder.init(apiKey!);

  try {
    const page = await builder
      .get("page", {
        userAttributes: {
          urlPath: "/",
        },
      })
      .toPromise();

    return NextResponse.json({ page, apiKey });
  } catch (error) {
    console.error('Error fetching from Builder.io:', error);
    return NextResponse.json({ error: 'Failed to fetch from Builder.io', details: error }, { status: 500 });
  }
}

