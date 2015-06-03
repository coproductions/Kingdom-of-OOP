import LivingThing from './LivingThing.js';
export default class Euvaryota extends LivingThing{

  constructor(name,uniCellular,asexual,mobile,heterotroph){
    super(name,uniCellular,true,false,asexual,mobile)
    this._heterotroph = heterotroph;
  }
  get heterotroph(){
    return this._heterotroph;
  }
  set heterotroph(value){
    this._heterotroph = value;
  }
  get autotroph(){
    if(!this._heterotroph){
      return true;
    } else return false;
  }
  set autotroph(value){
    if(value){
      this._heterotroph = false;
    } else this._heterotroph = true;
  }
}