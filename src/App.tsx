import { GlobalStyle } from "./Styles/GlobalStyle"
import { Reset } from "./Styles/reset"
import { RoutesMain } from "./routes/routesMain"

export const App = () => {
  return (
    <>
      <div className="app">
        <Reset />
        <GlobalStyle />
        <RoutesMain />
      </div>
    </>
  )
}
