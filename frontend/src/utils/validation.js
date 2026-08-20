export function validateSingleText(text) {
  if (!text || !text.trim()) {
    return 'Please enter a comment first.'
  }
  return null
}

export function splitBatchText(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
}

export function validateBatchTexts(texts) {
  if (!texts.length) {
    return 'Please enter at least one comment.'
  }
  if (texts.length > 100) {
    return 'Maximum 100 comments allowed per batch.'
  }
  return null
}
