import {extractRes, formDel, formGet, formPost, formPut, reqIsSuc} from "../utils/ReqUtil";

export async function addHero({name}) {
  let resObj = await formPost('/api/addHero',{name});
  return extractRes(resObj,{}).id;
}

export async function queryHero() {
  let resObj = await formGet('/api/queryHero');
  console.log(resObj);
  return extractRes(resObj,[]);
}

export async function queryHeroByName(name) {
  let resObj = await formGet('/api/queryHeroByName',{name});
  return extractRes(resObj,[]);
}

export async function delHero(id) {
  let resObj = await formDel(`/api/delHero/${id}`);
  return reqIsSuc(resObj);
}

export async function updateHero({id,name}) {
  let resObj = await formPut('/api/updateHero',{id,name});
  return reqIsSuc(resObj);
}


