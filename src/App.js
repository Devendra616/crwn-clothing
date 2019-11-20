import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import {auth,createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     // this.setState({ currentUser: user});  

     //userAuth is null when new user signing up
     if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot( snapshot => {
        setCurrentUser({
          currentUser : {
            id:snapshot.id,
            ...snapshot.data()
          }
        });
        console.log(this.state);
      })
     } else {
       //userAuth=null; user might have logged out or not exist so reset state
       setCurrentUser(userAuth);
     }

    
     createUserProfileDocument(userAuth) ;
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact path='/signIn' 
                render= {() => this.props.currentUser ? (<Redirect to='/' /> ) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
  }

  const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
  })

  const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);