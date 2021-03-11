import React, { useRef } from 'react'

import MaterialPopover from 'react-material-popover'
import 'react-material-popover/dist/index.css'

const Content = ({ closePopover }) => {
  return (
    <button onClick={closePopover} style={{ padding: '2rem' }}>
      Close
    </button>
  )
}
const App = () => {
  const ref = useRef(null)
  return (
    <>
      <button ref={ref}>test</button>
      <MaterialPopover
        ref={ref}
        paper={{ borderRadius: '16px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Content></Content>
      </MaterialPopover>
      <MaterialPopover></MaterialPopover>
    </>
  )
}

export default App
