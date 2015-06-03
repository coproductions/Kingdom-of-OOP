export default class LivingThing {
  constructor(name,uniCellular,trueNucleus,anaerobic,asexual,mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }
  set name(newName){
    this._name = newName;
  }
  get uniCellular(){
    return this._uniCellular;
  }
  set uniCellular(value){
    this._uniCellular = value;
  }
  get multiCellular(){
    if(this._uniCellular){
      return false;
    } else return true;
  }
  set multiCellular(value){
    if(value){
      this._uniCellular = false;
    } else this._uniCellular = true;
  }
  get eukaryote(){
    if(this._trueNucleus){
      return true;
    } else return false;
  }
  set eukaryote(value){
    if(value){
      this._trueNucleus = true;
    } else this._trueNucleus = false;
  }
  get prokaryote(){
    if(!this._trueNucleus){
      return true;
    } else return false;
  }
  set prokaryote(value){
    if(value){
      this._trueNucleus = false;
    } else this._trueNucleus = true;
  }
  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic(value){
    this._anaerobic = value;
  }
  get aerobic(){
    if(this._anaerobic){
      return false;
    } else return true;
  }
  set aerobic(value){
    if(value === true){
      this._anaerobic = false;
    } else this._anaerobic = true;
  }
  get asexual(){
    if(this._asexual){
      return true;
    } else return false;
  }
  set asexual(value){
    this._asexual = value;
  }
  get sexual(){
    if(!this._asexual){
      return true;
    } else return false;
  }
  set sexual(value){
    if(value){
      this._asexual = false;
    } else this._asexual = true;
  }
  get mobile(){
    return this._mobile;
  }
  set mobile(value){
    this._mobile = value;
  }
  get immobile(){
    if(!this._mobile){
      return true;
    } else return false;
  }
  set immobile(value){
    if(value){
      this._mobile = false;
    } else this._mobile = true;
  }

}