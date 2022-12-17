import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import AddNote from "../pages/AddNote";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
import UpdateNote from "../pages/UpdateNote";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/addNote",
                element: <AddNote></AddNote>
            },
            {
                path: "/updateNote",
                element: <UpdateNote></UpdateNote>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ],
        errorElement: <Error></Error>
    }
]);

export default router;