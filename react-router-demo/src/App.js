import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
// import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import { NoMatch } from "./Components/NoMatch";
import { Products } from "./Components/Products";
import { FeaturedProduct } from "./Components/FeaturedProduct";
import { NewProduct } from "./Components/NewProduct";
import { User } from "./Components/User";
import { UserDetails } from "./Components/UserDetails";
import { Admin } from "./Components/Admin";
import { Profile } from "./Components/Profile";
import { AuthProvider } from "./Components/auth";
import { Login } from "./Components/Login";
import { RequireAuth } from "./Components/RequireAuth";

const LazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  //index Route will render component at parent route
  //userId can be a ID or string if it is string Router priortize the match router
  // else users/admin display UserDetails component when there is no admin comp
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="feature" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
