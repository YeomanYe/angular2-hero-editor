import React,{Component} from "react";
import {connect} from 'dva';
import Link from 'umi/link';

@connect()
export default class HeroItem extends Component {
  render(){
    let {id,name} = this.props;
    return(
      <Link className="cnt-c1 col-1-4" to={`/details/${id}`}>
        <div className="cnt-c1 module hero">
          <h4 className="cnt-c1">{name}</h4>
        </div>
      </Link>
    )
  }
}
