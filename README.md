# react-material-popover

> A simple material-ui popover using ref instead of state

[![NPM](https://img.shields.io/npm/v/react-material-popover.svg)](https://www.npmjs.com/package/react-material-popover) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-material-popover
```

```bash
yarn add react-material-popover
```

## Usage

```jsx
import React, { useRef } from 'react'
import MaterialPopover from 'react-material-popover'

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
        paper={{ borderRadius: '5px' }}
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
    </>
  )
}
```

## License

MIT © [InterviewCandies](https://github.com/InterviewCandies)
