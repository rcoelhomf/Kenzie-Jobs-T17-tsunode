import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { CompanyProvider } from "./providers/CompanyContext/index.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CompanyProvider>
        <App />
      </CompanyProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
