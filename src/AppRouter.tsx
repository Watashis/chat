import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import LoginPage from "./Pages/LoginPage";


// const AppRoutes = [
//   {
//     index: true,
//     element: <Home />
//   },
//   {
//     path: '/counter',
//     element: <Counter />
//   },
//   {
//     path: '/fetch-data',
//     element: <FetchData />
//   }
// ];
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path:"/chat/:id",
        element:<ChatPage></ChatPage>
    }
]);
export default function AppRouters() {
    return <RouterProvider router={router} />
}
//export default AppRoutes;
