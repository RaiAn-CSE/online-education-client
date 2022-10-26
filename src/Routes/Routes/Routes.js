import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq/Faq";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog";


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
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/course-details`)
            },
            {
                path: '/course-details/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    }
])