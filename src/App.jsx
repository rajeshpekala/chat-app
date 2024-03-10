import Body from "./Body"
import Footer from "./Footer";
import { Header } from "./Header"
import { Outlet, createBrowserRouter } from "react-router-dom";
import Blog from "./components/navBarItems/Blog";
import Contact from "./components/navBarItems/Contact";

function App() {


  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer/>
    </div>

    
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },

      { path: "/about", element: <Blog /> },

      { path: "/contact", element: <Contact /> },
     

      
    ],

    
  },
]);

export default App
