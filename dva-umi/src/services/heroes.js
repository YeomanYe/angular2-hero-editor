export async function addHero({name}) {
  return parseInt(Math.random() * 100);
}

export async function queryHero() {
  return [{name:'Tony',id:1},{name:'Tom',id:2},{name:'Jack',id:3},{name:'Wang',id:4}];
}


export async function delHero(id) {

}

export async function updateHero({id,name}) {

}
