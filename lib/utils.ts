import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ===============

/**
 * Unique string generator
 * @param {number} strLength - The desired length of the generated string.
 * @returns {string | false} - Returns the generated string or `false` if the input is invalid.
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

export const locations = [
  {
    department: 'dhaka',
    name: 'dhaka',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'faridpur',
    cost: 60
  },
  {
    department: 'dhaka',
    name: 'gazipur',
    cost: 100
  },
  {
    department: 'dhaka',
    name: 'gopalganj',
    cost: 40
  },
  {
    department: 'dhaka',
    name: 'kishoreganj',
    cost: 30
  },
  {
    department: 'dhaka',
    name: 'madaripur',
    cost: 70
  },
  {
    department: 'dhaka',
    name: 'munshiganj',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'rajbari',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'tangail',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'narayanganj',
    cost: 50
  },
  {
    department: 'dhaka',
    name: 'shariatpur',
    cost: 50
  },
  {
    department: 'rajshahi',
    name: 'rajshahi',
    cost: 120
  },
  {
    department: 'rajshahi',
    name: 'bogura',
    cost: 100
  },
  {
    department: 'rajshahi',
    name: 'joypurhat',
    cost: 100
  },
  {
    department: 'rajshahi',
    name: 'naogaon',
    cost: 150
  },
  {
    department: 'rajshahi',
    name: 'nator',
    cost: 50
  },
  {
    department: 'rajshahi',
    name: 'pabna',
    cost: 150
  },
  {
    department: 'rajshahi',
    name: 'sirajganj',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'rangpur',
    cost: 140
  },
  {
    department: 'rangpur',
    name: 'gaibandha',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'dinajpur',
    cost: 20
  },
  {
    department: 'rangpur',
    name: 'kurigram',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'lalomonirhat',
    cost: 60
  },
  {
    department: 'rangpur',
    name: 'thakurgaon',
    cost: 50
  },
  {
    department: 'rangpur',
    name: 'nilphamari',
    cost: 80
  },
  {
    department: 'rangpur',
    name: 'panchagarh',
    cost: 550
  }
]
