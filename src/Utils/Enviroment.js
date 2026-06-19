export const api_url = 'https://dev.quecko.com/wp-json/wp/v2/'
export const BASE_URL = 'https://dev.quecko.com/wp-json/wp/v2'

// reCAPTCHA site key is intentionally public (embedded in HTML by Google's SDK)
export const SiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdtWB8rAAAAAAP9QVAvrWYGyMuj2DygbxTupKKL'

// Secret key is server-side only — must never reach the browser
export const SECRETKEY = process.env.RECAPTCHA_SECRET_KEY || '6LdtWB8rAAAAAKWbFJQFkNK-QFJL7Y0kmVqaxDW-'

export const verifyUrlGoogle = 'https://www.google.com/recaptcha/api/siteverify'
export const bitFormResponseUrl = 'https://dev.quecko.com/wp-json/bitform/v1/entry/1'

// API token for BitForm — server-side only (used only in /api/submitForm)
export const BitFormheaders = process.env.BITFORM_API_TOKEN || '59971a5c6213ecbb4e58bf91b4a56962f05311d8'

// SheetDB endpoint — used client-side; rotate this key and set it in .env.local
export const Sendsheetdb_API = process.env.NEXT_PUBLIC_SHEETDB_API_URL || 'https://sheetdb.io/api/v1/htpewqzlp4ton'
