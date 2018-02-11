import React from 'react'

class MainHeader extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h3 className="mainTitle">{title}</h3>
        <hr className="postHeaderDivider"></hr>
      </div>
    )
  }
}

export default MainHeader
