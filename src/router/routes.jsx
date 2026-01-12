import DashboardLayout from "@layouts/DashboardLayout";
import Dashboard from "@pages/Dashboard";

import { dashboardLoader } from "./loaders";
import { addSaleAction, addUserAction } from "./actions";
import { RootErrorBoundary, DashboardErrorBoundary } from "./error-boundaries";

export const routes = [
    {
        path: "/",
        element: <DashboardLayout />,
        errorElement: <RootErrorBoundary />,
        loader: dashboardLoader,
        children: [{
          index: true, element: <Dashboard />,errorElement: <DashboardErrorBoundary />, actions: async ({request})=>{
            const formData = await request.formData()
            const intent = formData.get('_intent')
            if(intent === 'add-sale'){
              return addSaleAction({request})
            }
            if(intent === 'add-user'){
              return addUserAction({request})
            }
            return null;
          }
        }]
    }
];
