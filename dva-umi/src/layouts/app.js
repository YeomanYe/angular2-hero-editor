import React from 'react';
import {withRouter} from "dva/router";
import Link from 'umi/link';
import Redirect from 'umi/redirect';
import {connect} from 'dva';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = ({children,location,user}) => {
  let {pathname} = location;
  if(pathname === '/login') return (<>{children}</>);
  else if(user.name === '') return (<Redirect to={'/login'}/>);
  return(
    <div>
      <h1 className="cnt-c0">Tour of Heroes</h1>
      <nav className="cnt-c0">
        <Link className={`cnt-c0 ${pathname === '/heroes' ? 'active' : ''}`} to={'/heroes'}>Heroes</Link>
        <Link className={`cnt-c0 ${pathname === '/dashboard' ? 'active' : ''}`} to={'/dashboard'}>Dashboard</Link>
      </nav>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
      {React.Children.only(children)}
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};

export default withRouter(connect(({user})=>({user}))(App));
