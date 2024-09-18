import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
/**
 * Unique string generator
 * @param {number} strLength - The desired length of the generated string.
 * @returns {string} - Returns the generated string.
 * @throws {Error} - Throws an error if the input is invalid.
 */
export function idGenerator(strLength: number): string {
  // Ensure the length is a valid number
  const length = typeof strLength === 'number' && strLength > 0 ? strLength : 0

  // If the length is valid, proceed to generate the ID
  if (length) {
    const possibleCharacters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const possibleCharactersLength = possibleCharacters.length

    let output = ''
    for (let i = 0; i < length; i++) {
      const generateToken = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharactersLength)
      )
      output += generateToken
    }
    return output
  } else {
    throw new Error(
      'Invalid string length provided. Must be a positive number.'
    )
  }
}
