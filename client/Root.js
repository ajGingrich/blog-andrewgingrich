import React from 'react';
import Routes from './routes'
import { ErrorBoundary } from 'Components'

const Root = () => {
  return <div>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </div>;
};

export default Root
