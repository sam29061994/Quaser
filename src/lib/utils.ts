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
