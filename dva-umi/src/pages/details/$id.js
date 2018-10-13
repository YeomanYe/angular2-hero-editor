import React,{Component} from 'react';
import {formChangeFactory} from "../../utils/PageUtil";
import {connect} from 'dva';
import {cAction} from "../../utils/ReduxUtil";
import router from 'umi/router';

@connect(null,{
  update:(id,name) => cAction('hero/updateEff',{id,name})
})
export default class Dashboard extends Component{
  constructor(props){
    super(props);
    const {location:{query:{name}}} = this.props;
    this.state = {
      name
    };
  }
  updateHero = () => {
    const {match:{params:{id}},update} = this.props;
    let {name} = this.state;
    update(parseInt(id),name);
  };
  render(){
    console.log('props',this);
    const {match:{params:{id}}} = this.props;
    let {name} = this.state;
    let createBind = formChangeFactory(this);
    return (
      <div>
        <div className="cnt-c4">
          <h2 className="cnt-c4">{name} details!</h2>
          <div className="cnt-c4">
            <label className="cnt-c4">id: </label>
            {id}
          </div>
          <div className="cnt-c4">
            <label className="cnt-c4">name: </label>
            <input {...createBind('name')} placeholder="name" className="cnt-c4 ng-untouched ng-pristine ng-valid"/>
          </div>
          <button onClick={this.updateHero} className="cnt-c4">Save</button>
          <button onClick={router.goBack} className="cnt-c4">Back</button>
        </div>
      </div>
    )
  }
}
