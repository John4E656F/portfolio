import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/api';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const contentType = await client.getContentType('portfolio');
    }
}