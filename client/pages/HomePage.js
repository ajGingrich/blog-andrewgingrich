import React from 'react';
import {
  PostList,
  Sidebar,
  Navigation,
  Footer
} from 'Containers';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const params = this.props.match.params;

    return (
      <div>
        <Navigation />
          <div className="container">
            <div className="row">
              <Sidebar/>
              <PostList page={params.page || 1}/>
            </div>
            <Footer />
          </div>
      </div>
    )
  }
};

export default HomePage
