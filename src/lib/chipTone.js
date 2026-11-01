// Must match the number of --tone-* tokens in index.css.
const CHIP_TONES = 11
// Chosen so no two chips in the current rows share a color.
const HASH_MULTIPLIER = 5
const HASH_SEED = 9

// Deterministic tone per label, so the same technology always gets the
// same color everywhere it appears on the page.
export const chipTone = (label) => {
  let hash = HASH_SEED
  for (let i = 0; i < label.length; i += 1) {
    hash = (hash * HASH_MULTIPLIER + label.charCodeAt(i)) % CHIP_TONES
  }
  return hash + 1
}
