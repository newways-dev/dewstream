export const COOKIE_NAME = 'language'
export const languages = ['de', 'en'] as const
export const defaultLanguage: Language = 'en'

export type Language = (typeof languages)[number]
