import React,{Component} from "react";
import {connect} from 'dva';

@connect()
export default class HeroItem extends Component {
  render(){
    let {id,name} = this.props;
    return(
      <li className="selected cnt-c3">
        <span className="cnt-c3 badge">{id}</span>
        <span className="cnt-c3">{name}</span>
        <button className="cnt-c3 delete">x</button>
      </li>
    )
  }
}
