import { chipTone } from '../lib/chipTone'

const StackChips = ({ items, label, compact = false }) => {
  if (!items?.length) return null

  return (
    <ul className={`chip-row${compact ? ' chip-row-compact' : ''}`} aria-label={label}>
      {items.map((item) => (
        <li key={item} style={{ '--chip-color': `var(--tone-${chipTone(item)})` }}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default StackChips
