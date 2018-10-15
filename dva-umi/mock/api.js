let heroes = [{name:'Tony',id:1},{name:'Tom',id:2},{name:'Jack',id:3},{name:'Wang',id:4}];
let id = 4;
export default {
  'GET /api/queryHero':(req,res) => {
    console.log('queryHero');
    res.send({status:200,data:heroes});
  },
  'GET /api/queryHeroByName':(req,res) => {
    console.log(req.query.name);
    let data = heroes.filter(hero => hero.name.indexOf(req.query.name)>=0);
    res.send({status:200,data});
  },
  'POST /api/addHero':(req,res) => {
    console.log(req.body);
    ++id;
    let hero = {
      id,
      name:req.body.name
    };
    heroes.push(hero);
    res.send({status:200,data:hero});
  },
  'DELETE /api/delHero/:id':(req,res) => {
    let data;
    console.log(req.params);
    for(let len=heroes.length,i=0;i<len;i++){
      let hero = heroes[i];
      if(hero.id === parseInt(req.params.id,10)) {
        data = heroes.splice(i,1)[0];
        break;
      }
    }
    res.send({status:200,data});
  },
  'PUT /api/updateHero':(req,res) => {
    let data;
    for(let hero of heroes){
      if(hero.id === parseInt(req.body.id,10)){
        hero.name = req.body.name;
        data = hero;
        break;
      }
    }
    res.send({status:200,data});
  }
}
