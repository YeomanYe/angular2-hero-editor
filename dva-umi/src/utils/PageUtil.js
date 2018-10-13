
/**
 * 绑定表单输入创造器工厂
 * @param self
 * @returns {function(*=): Function}
 */
export function changeHandlerFactory(self) {
  return function () {
    let names = [].slice.call(arguments);
    names = names.length === 1 ? names[0] : names;
    return e => {
      let state = self.state;
      let val = e;
      if(e && e.target) val = e.target.value;
      if (typeof names === 'string')
        self.setState({[names]: val});
      else {
        let last; //取末尾
        for (let i = 0, len = names.length - 1; i < len; i++) {
          last = state[names[i]];
        }
        last[names[names.length - 1]] = val;
        self.setState(state);
      }
    }
  }
}

export function formChangeFactory(self) {
  let createOnChange = changeHandlerFactory(self);
  return function () {
    let names = [].slice.call(arguments);
    let name = names[names.length - 1];
    return {
      onChange:createOnChange.apply(self,names),
      value:self.state[name]
    }
  }
}

export function createEnter(handler) {
  return e => {
    // console.log(e.keyCode);
    e.keyCode === 13 && handler();
  }
}
