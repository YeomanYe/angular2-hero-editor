import React, {Component} from 'react';
import DashboardItem from "../../components/DashboardItem";
import {connect} from 'dva';
import {cAction} from "../../utils/ReduxUtil";
import {createEnter, formChangeFactory} from "../../utils/PageUtil";

@connect(({hero:{heroes}}) => ({heroes}),{
  query:(name) => cAction('hero/queryByNameEff',name)
})
export default class Dashboard extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        name:''
      };
    }
  componentWillMount(){
      this.props.query('');
  }

  queryByName = () => {
    let {query} = this.props;
    let {name} = this.state;
    query(name);
  };

  render() {
    let {heroes} = this.props;
    let createBind = formChangeFactory(this);
    return (
      <div>
        <h3 className="cnt-c1">Top Heroes</h3>
        <div className="cnt-c1 grid gird-pad">
          {heroes.map(hero => <DashboardItem key={hero.id} id={hero.id} name={hero.name}/>)}
        </div>
        <div className="cnt-c2" id="search-component">
          <h4 className="cnt-c2">Hero Search</h4>
          <input onKeyUp={createEnter(this.queryByName)} {...createBind('name')} className="cnt-c2" id="search-box"/>
        </div>
      </div>
    )
  }
}
