import React,{Component} from 'react';
import DashboardItem from "../../components/DashboardItem";
export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <h3 className="cnt-c1">Top Heroes</h3>
        <div className="cnt-c1 grid gird-pad">
          <DashboardItem id={1} name={'test'}/>
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
