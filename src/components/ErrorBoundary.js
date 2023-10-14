import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Ooops. That is not good</h1>;
  }

  return props.children;

}

export default ErrorBoundary;