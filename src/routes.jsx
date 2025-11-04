import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import ListUsers from "./pages/Home/ListUsers"

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home />
    },
    {
        path: "/Lista-de-usuarios",
        element: <ListUsers />
    }
])

export default router