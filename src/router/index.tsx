import { useRoutes } from "react-router-dom";
import Home from "@/Pages/Home";
import Cart from "@/Pages/Cart";
export function RouterElements(){
    const routeElements = useRoutes([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ])
    return routeElements
}