import { RefObject } from 'react';
import emailjs from '@emailjs/browser';

export const send = async (form: RefObject<HTMLFormElement>): Promise<boolean> => {
  if (form.current) {
    return await emailjs
      .sendForm('service_nog5v5l', 'template_sb0znjm', form.current, {
        publicKey: '8eh_wLE7hE65KK6Va',
      })
      .then(
        () => {
          console.log('SUCCESS');
          return true;
        },
        (error) => {
          console.log('FAILED...', error.text);
          return false;
        },
      );
  }

  console.log('FAILED');
  return false;
}