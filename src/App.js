import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // This means inside lifecycle method everything will be excecute?
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        console.log(userAuth.uid);
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(
          snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          },
          err => {
            console.log("encouter error", err);
          }
        );
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    return this.unsubscribeFromAuth;
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/sign-in'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

// Passing null as the first argument becuase we dont need currentUser in this App.js itself.
export default connect(mapStateToProps, mapDispatchToProps)(App);
