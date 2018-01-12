import React from 'react'

const FourOhFourError = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default FourOhFourError
