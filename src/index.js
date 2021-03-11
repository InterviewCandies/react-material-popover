import { makeStyles, Popover } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const MaterialPopover = React.forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.onclick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setAnchorEl(ref.current)
      }
    }
  }, [ref])

  const useStyles = makeStyles(() => ({
    paper: { ...props.paper }
  }))
  const open = Boolean(anchorEl)
  const classes = useStyles()

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      classes={{
        paper: classes.paper
      }}
      anchorOrigin={{ ...props.anchorOrigin }}
      transformOrigin={{ ...props.transformOrigin }}
      onClose={() => setAnchorEl(null)}
    >
      {
        // Thanks to https://stackoverflow.com/a/35102287/14480038
        props.children &&
          React.cloneElement(props.children, {
            closePopover: () => setAnchorEl(null)
          })
      }
    </Popover>
  )
})

MaterialPopover.propTypes = {
  children: PropTypes.element.isRequired
}

export default MaterialPopover
