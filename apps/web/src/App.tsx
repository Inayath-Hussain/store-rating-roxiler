import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import { routes } from "./routes"
import RegisterStoreOwnerPage from "./pages/StoreOwner/Register"
import RegisterCustomerPage from "./pages/Customer/Register"

function App() {

  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.registerStoreOwner} element={<RegisterStoreOwnerPage />} />
      <Route path={routes.registerCustomer} element={<RegisterCustomerPage />} />
    </Routes>
  )
}

export default App
