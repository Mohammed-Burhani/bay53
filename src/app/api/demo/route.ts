import { NextRequest, NextResponse } from 'next/server';
import { sendDemoRequestEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('Demo form data received:', { ...data, message: data.message?.substring(0, 50) });

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.company) {
      console.error('Missing required fields:', { name: !!data.name, email: !!data.email, phone: !!data.phone, company: !!data.company });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sendDemoRequestEmail(data);
    console.log('Email send result:', result);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Demo request sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send demo request', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in demo API route:', error);
    return NextResponse.json(
      { error: 'Failed to send demo request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
