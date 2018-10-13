import React,{Component} from "react";
import {connect} from 'dva';
import {cAction} from "../utils/ReduxUtil";

@connect(null,{
  select:(id) => cAction('hero/selectedHero',id),
  del:(id) => cAction('hero/delEff',id)
})
export default class HeroItem extends Component {

  selectHero = () => {
    let {select,id} = this.props;
    select(id);
  };

  delHero = (e) => {
    let {del,id} = this.props;
    del(id);
    e.stopPropagation();
  };

  render(){
    let {id,name,isSelected} = this.props;
    return(
      <li onClick={this.selectHero} className={`cnt-c3 ${isSelected ? 'selected' : ''}`}>
        <span className="cnt-c3 badge">{id}</span>
        <span className="cnt-c3">{name}</span>
        <button onClick={this.delHero} className="cnt-c3 delete">x</button>
      </li>
    )
  }
}
