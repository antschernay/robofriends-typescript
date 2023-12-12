import React, { useState } from 'react';


type Props = {
  children?: JSX.Element
}


function ErrorBoundary(props: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Ooops. That is not good</h1>;
  }

  return props.children;

}

export default ErrorBoundary;