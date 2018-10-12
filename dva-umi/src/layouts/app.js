import React,{Component} from 'react';
import {withRouter} from "dva/router";
import Link from 'umi/link';

const App = ({children,location}) => {
  let {pathname} = location;
  if(pathname === '/login') return (<>{children}</>)
  return(
    <div>
      <h1 className="cnt-c0">Tour of Heroes</h1>
      <nav className="cnt-c0">
        <Link className={"cnt-c0 " + pathname === '/heroes' ? 'active' : ''} to={'/heroes'}>Heroes</Link>
        <Link className={"cnt-c0 " + pathname === '/dashboard' ? 'active' : ''} to={'/dashboard'}>Dashboard</Link>
      </nav>
      {React.Children.toArray(children)}
    </div>
  )
};

export default withRouter(App);
