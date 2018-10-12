export async function login({name,pass}) {
  if(name === 'admin' && pass === 'admin'){
    return true;
  }
  return false;
}
