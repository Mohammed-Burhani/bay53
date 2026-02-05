import { NextRequest, NextResponse } from 'next/server';
import { sendDemoRequestEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sendDemoRequestEmail(data);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Demo request sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send demo request' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error sending demo request email:', error);
    return NextResponse.json(
      { error: 'Failed to send demo request' },
      { status: 500 }
    );
  }
}
