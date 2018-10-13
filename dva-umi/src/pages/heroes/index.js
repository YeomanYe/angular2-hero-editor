import React, {Component} from 'react';
import HeroItem from "../../components/HeroItem";
import {connect} from 'dva';
import {cAction} from "../../utils/ReduxUtil";
import Link from 'umi/link';
import {formChangeFactory} from "../../utils/PageUtil";

@connect(({hero:{heroes,selectedHero}}) => ({datas: heroes,selectedHero}), {
  query: () => cAction('hero/queryEff'),
  add: name => cAction('hero/addEff', {name})
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

  addHero = () => {
    this.props.add(this.state.name);
    this.setState({name:''});
  };

  componentWillMount() {
    this.props.query();
  }

  render() {
    let {datas,selectedHero} = this.props;
    let createBind = formChangeFactory(this);
    return (
      <div>
        <h2 className="cnt-c3">My Heroes</h2>
        <ul className="cnt-c3 heroes">
          {datas.map(data => <HeroItem key={data.id} isSelected={data === selectedHero} {...data}/>)}
        </ul>
        {selectedHero ?
          <div style={{overflow:'hidden'}} className="cnt-c3">
            <h2 className="cnt-c3">{selectedHero.name} is my hero</h2>
            <Link className="cnt-c1 col-1-4" to={`/details/${selectedHero.id}?name=${selectedHero.name}`}>
              <button className="cnt-c3">view Details</button>
            </Link>
          </div>
          : null}
        <div className="cnt-c3">
          <label className="cnt-c3">Hero name:</label>
          <input {...createBind('name')} className="cnt-c3"/>
          <button onClick={this.addHero} className="cnt-c3">Add</button>
        </div>
      </div>
    )
  }
}
