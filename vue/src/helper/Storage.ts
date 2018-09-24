export default class Storage {
  static setItem(key:string,data:any):void{
    localStorage.setItem(key,JSON.stringify(data));
  }
  static getItem(key:string):any{
    let data:string | null = localStorage.getItem(key);
    data = data ? JSON.parse(data) : null;
    return data;
  }
}
