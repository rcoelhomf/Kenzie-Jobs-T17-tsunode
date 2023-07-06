import { GlobalStyle } from "./Styles/GlobalStyle"
import { Reset } from "./Styles/reset"
import { RoutesMain } from "./routes/routesMain"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  return (
    <>
      <div className="app">
        <Reset />
        <GlobalStyle />
        <RoutesMain />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="dark"
       />
    </>
  )
}
