import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import CartsContainer from "./container/CartsContainer";
import ProductDetailContainer from "./container/ProductDetailContainer.js";
import ListProductContainer from "./container/ListProductContainer.js";
import BaoCao from "./components/BaoCao";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <div className="manhinh">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/baocao">
              <BaoCao />
            </Route>
            <Route
              path="/list/:id"
              render={({ match }) => {
                return <ListProductContainer match={match} />;
              }}
            ></Route>
            <Route path="/product/:id">
              <ProductDetailContainer />
            </Route>
            <Route path="/cart">
              <CartsContainer />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
