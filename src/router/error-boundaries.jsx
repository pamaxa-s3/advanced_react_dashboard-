import {isRouteErrorResponse, useRouteError} from 'react-router-dom'
export const RootErrorBoundary = () => {
  const error = useRouteError();
  
  if(isRouteErrorResponse(error)) {
    return (
      <div>
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
      </div>
      )
  }
  
  return (
    <div>
    <h1>Application Error</h1>
    <pre>{error?.message}</pre>
    </div>
    )
}