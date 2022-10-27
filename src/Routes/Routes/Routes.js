import { createBrowserRouter, Link } from "react-router-dom";
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
                loader: () => fetch(`https://online-education-server.vercel.app/course-details`)
            },
            {
                path: '/course-details/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://online-education-server.vercel.app/course-details/${params.id}`)
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
            {
                path: '*',
                element:
                    <div className="mt-5 text-center">
                        <h1>This route not found</h1>
                        <h2 className="mt-3">Go to home Page clicking bellow:</h2>
                        <Link to="/">Go To Home</Link>
                    </div>
            }
        ]
    }
])