import DashboardLayout from "@layouts/DashboardLayout";
import DashboardPage from "@pages/DashboardPage";

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
          index: true, element: <DashboardPage />,errorElement: <DashboardErrorBoundary />, actions: async ({request})=>{
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
