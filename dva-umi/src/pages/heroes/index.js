import React,{Component} from 'react';
import HeroItem from "../../components/HeroItem";
export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <h2 className="cnt-c3">My Heroes</h2>
        <ul className="cnt-c3 heroes">
          <HeroItem/>
          <li className="cnt-c3">
            <span className="cnt-c3 badge">12</span>
            <span className="cnt-c3">Narco</span>
            <button className="cnt-c3 delete">x</button>
          </li>
          <li className="cnt-c3">
            <span className="cnt-c3 badge">13</span>
            <span className="cnt-c3">Bombasto</span>
            <button className="cnt-c3 delete">x</button>
          </li>
          <li className="cnt-c3">
            <span className="cnt-c3 badge">14</span>
            <span className="cnt-c3">Celeritas</span>
            <button className="cnt-c3 delete">x</button>
          </li>
          <li className="cnt-c3">
            <span className="cnt-c3 badge">15</span>
            <span className="cnt-c3">Magneta</span>
            <button className="cnt-c3 delete">x</button>
          </li>
        </ul>
        <div className="cnt-c3">
          <h2 className="cnt-c3">MR. NICE is my hero</h2>
          <button className="cnt-c3">view Details</button>
        </div>
        <div className="cnt-c3">
          <label className="cnt-c3">Hero name:</label>
          <input className="cnt-c3"/>
            <button className="cnt-c3">Add</button>
        </div>
      </div>
    )
  }
}
