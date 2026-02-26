/**
 * Server-side reCAPTCHA verification utility
 */

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not configured');
    return { success: false, error: 'reCAPTCHA not configured' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return { success: false, error: 'reCAPTCHA verification failed' };
    }

    // For reCAPTCHA v3, check the score (0.0 - 1.0)
    // Scores closer to 1.0 indicate lower risk
    const score = data.score || 0;
    const threshold = 0.5; // Adjust this threshold based on your needs

    if (score < threshold) {
      console.warn(`reCAPTCHA score too low: ${score}`);
      return { success: false, score, error: 'Suspicious activity detected' };
    }

    return { success: true, score };
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { success: false, error: 'Failed to verify reCAPTCHA' };
  }
}
