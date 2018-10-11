import React,{Component} from 'react';
export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <div className="message warning">
          <div className="inset">
            <div className="login-head">
              <h1>Login Form</h1>
            </div>
            <form className="login-form">
              <li>
                <input type="text" className="text user-input" placeholder="admin"/><a href="#" className=" icon user"></a>
              </li>
              <div className="clear"></div>
              <li>
                <input type="password" className="pass-input" placeholder="admin"/> <a href="#" className="icon lock"></a>
              </li>
              <div className="clear"></div>
              <div className="submit">
                <input type="button" value="Sign in"/>
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
