export const DashboardErrorBoundary = () => {
  const error = useRouteError()
  
  return (
    <div>
    <h2>Dashboard failed to load</h2>
    <pre>{error?.message}</pre>
    </div>
    )
}