import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../layout/Main/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/faq/:id',
                element: <Faq></Faq>
            }
        ]
    }
])