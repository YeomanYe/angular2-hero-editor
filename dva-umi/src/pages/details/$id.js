import React,{Component} from 'react';
export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <h1 className="cnt-c0">Tour of Heroes</h1>
        <nav className="cnt-c0">
          <a className="cnt-c0" href="heroes.html">Heroes</a>
          <a className="cnt-c0" href="dashboard.html">Dashboard</a>
        </nav>
        <div className="cnt-c4">
          <h2 className="cnt-c4">Narco details!</h2>
          <div className="cnt-c4">
            <label className="cnt-c4">id: </label>
            12
          </div>
          <div className="cnt-c4">
            <label className="cnt-c4">name: </label>
            <input placeholder="name" className="cnt-c4 ng-untouched ng-pristine ng-valid"/>
          </div>
          <button className="cnt-c4">Save</button>
          <button className="cnt-c4">Back</button>
        </div>
      </div>
    )
  }
}
