import React,{Component} from 'react';
export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <h1 className="cnt-c0">Tour of Heroes</h1>
        <nav className="cnt-c0">
          <a className="cnt-c0" href="heroes.html">Heroes</a>
          <a className="cnt-c0 active" href="dashboard.html">Dashboard</a>
        </nav>
        <h3 className="cnt-c1">Top Heroes</h3>
        <div className="cnt-c1 grid gird-pad">
         <a className="cnt-c1 col-1-4" href="details.html">
          <div className="cnt-c1 module hero">
            <h4 className="cnt-c1">Narco</h4>
          </div>
        </a>
          <a className="cnt-c1 col-1-4" href="details.html">
          <div className="cnt-c1 module hero">
            <h4 className="cnt-c1">Bombasto</h4>
          </div>
        </a>
          <a className="cnt-c1 col-1-4" href="details.html">
          <div className="cnt-c1 module hero">
            <h4 className="cnt-c1">Celeritas</h4>
          </div>
        </a>
          <a className="cnt-c1 col-1-4" href="details.html">
          <div className="cnt-c1 module hero">
            <h4 className="cnt-c1">Magneta</h4>
          </div>
        </a>
        </div>
        <div className="cnt-c2" id="search-component">
          <h4 className="cnt-c2">Hero Search</h4>
          <input className="cnt-c2" id="search-box"/>
        </div>
      </div>
    )
  }
}
