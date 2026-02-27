import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback } from 'react';

export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getRecaptchaToken = useCallback(
    async (action: string): Promise<string | null> => {
      console.log('getRecaptchaToken called with action:', action);
      console.log('executeRecaptcha available:', !!executeRecaptcha);
      
      if (!executeRecaptcha) {
        console.warn('reCAPTCHA not yet available - executeRecaptcha is undefined');
        return null;
      }

      try {
        console.log('Executing reCAPTCHA...');
        const token = await executeRecaptcha(action);
        console.log('reCAPTCHA token generated successfully');
        return token;
      } catch (error) {
        console.error('Error executing reCAPTCHA:', error);
        return null;
      }
    },
    [executeRecaptcha]
  );

  return { getRecaptchaToken };
}
