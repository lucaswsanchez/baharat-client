import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Componentes
import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/routes/Home";
import Productos from "./components/routes/Productos";
import Pedidos from "./components/routes/Pedidos";
import Reportes from "./components/routes/Reportes";
import Perfil from "./components/routes/Perfil";

const ProtectedRoutes = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
