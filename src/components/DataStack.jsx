// Pure-CSS 3D isometric stack of data planes — no WebGL, no libraries.
// Each plane is a translucent grid pushed along the Z axis; the whole
// scene rotates slowly on its vertical axis.
const DataStack = ({ layers = [] }) => {
  return (
    <div className='data-stack' aria-hidden='true'>
      <div className='data-stack-scene'>
        {layers.map((label, index) => (
          <div
            key={label}
            className='data-plane'
            style={{ '--i': index, '--n': layers.length }}
          >
            <span className='data-plane-label'>{label}</span>
          </div>
        ))}
        <div className='data-core' />
      </div>
    </div>
  )
}

export default DataStack
