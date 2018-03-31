import React from 'react'

const FourOhFourError = ({ location }) => ( //eslint-disable-line
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default FourOhFourError
