import React from 'react';
import Routes from './routes'
import { ErrorBoundary } from 'Components'

const Root = () => {
  return <ErrorBoundary>
          <Routes />
        </ErrorBoundary>;
};

export default Root
