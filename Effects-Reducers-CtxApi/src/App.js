import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* runs after component evaluation if the dependencies has change */
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);


  // effect without dependencies runs on every state change. In this example for each keystroke
  // useEffect(() => { console.log('effect running') });

  // const loginHandler = (email, password) => {
  // We should of course check email and password
  // But it's just a dummy/ demo anyways

  // localStorage.setItem('isLoggedIn', '1');
  // setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    // <React.Fragment>
    //   <AuthContext.Provider
    //     value={{
    //       isLoggedIn: isLoggedIn,
    //       onLogout: logoutHandler
    //     }}>
    //     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    //     <main>
    //       {!isLoggedIn && <Login onLogin={loginHandler} />}
    //       {isLoggedIn && <Home onLogout={logoutHandler} />}
    //     </main>
    //   </AuthContext.Provider>
    // </React.Fragment>
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
