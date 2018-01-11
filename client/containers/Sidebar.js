import React from 'react';
import ReactDOM from 'react-dom';
import { AccordionPosts } from 'Components'

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="sidebar">
          <AccordionPosts />
        </div>
      </div>
    )
  }
};

export default Sidebar
