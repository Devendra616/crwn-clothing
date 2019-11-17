import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import {auth,createUserProfileDocument} from './firebase/firebase.util';


class App extends React.Component {
  constructor() {
    super();
    this.state= {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     // this.setState({ currentUser: user});  

     //userAuth is null when new user signing up
     if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot( snapshot => {
        this.setState({
          currentUser : {
            id:snapshot.id,
            ...snapshot.data()
          }
        })
      })
     } else {
       //userAuth=null; user might have logged out or not exist so reset state
       this.setState({currentUser:userAuth});
     }

    
     createUserProfileDocument(user) ;
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  }

  export default App;
