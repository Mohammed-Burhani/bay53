import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('Contact form data received:', { ...data, message: data.message?.substring(0, 50) });

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      console.error('Missing required fields:', { name: !!data.name, email: !!data.email, subject: !!data.subject, message: !!data.message });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!data.recaptchaToken) {
      console.error('Missing reCAPTCHA token');
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }

    const recaptchaResult = await verifyRecaptcha(data.recaptchaToken);
    if (!recaptchaResult.success) {
      console.error('reCAPTCHA verification failed:', recaptchaResult.error);
      return NextResponse.json(
        { error: recaptchaResult.error || 'reCAPTCHA verification failed' },
        { status: 403 }
      );
    }

    console.log('reCAPTCHA verified successfully, score:', recaptchaResult.score);

    const result = await sendContactEmail(data);
    console.log('Email send result:', result);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
