import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cleanString(input: string) {
  // Split the string by lines
  const lines = input.trim().split('\n');

  // Extract the actual text from each line and concatenate
  const cleanedText = lines
    .map((line) => {
      const text = line.split(':')[1].trim().slice(1, -1); // Remove the surrounding quotes
      return text;
    })
    .join('');

  return cleanedText;
}

export function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return '';
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
