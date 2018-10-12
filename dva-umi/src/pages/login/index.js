import React,{Component} from 'react';
import Link from 'umi/link';
import {formChangeFactory} from "../../utils/PageUtil";
import {cAction} from "../../utils/ReduxUtil";
import {connect} from 'dva';

@connect(null,{
  login:(name,pass) => cAction('user/login',{name,pass})
})
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',pass:''
    }
  }

  login = () => {
    let {name,pass} = this.state;
    this.props.login(name,pass);
  };

  render(){
    let createBind = formChangeFactory(this);
    return (
      <div>
        <div className="message warning">
          <div className="inset">
            <div className="login-head">
              <h1>Login Form</h1>
            </div>
            <form className="login-form">
              <li>
                <input {...createBind('name')} type="text" className="text user-input" placeholder="admin"/><a className=" icon user"></a>
              </li>
              <li>
                <input {...createBind('pass')} type="password" className="pass-input" placeholder="admin"/> <a className="icon lock"></a>
              </li>
              <Link to={'/dashboard'}>
              <div className="submit">
                <input onClick={this.login} type="button" value="Sign in"/>
              </div>
              </Link>
            </form>
          </div>
        </div>
        <div className="footer">
          <p>Copyright &copy; 2014.</p>
        </div>
      </div>
    )
  }
}
