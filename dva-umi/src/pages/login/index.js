import React, {Component} from 'react';
import {formChangeFactory} from "../../utils/PageUtil";
import {cAction} from "../../utils/ReduxUtil";
import {connect} from 'dva';
import router from 'umi/router';

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

  login = async() => {
    let {name,pass} = this.state;
    await this.props.login(name,pass);
    router.push('/dashboard');
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
              <div className="submit">
                <input onClick={this.login} type="button" value="Sign in"/>
              </div>
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
