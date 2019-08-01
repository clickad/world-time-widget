import Draw from "./draw";

export default class Berlin extends Draw {

  constructor(){
    super('berlin', 2);
  }

  timeBerlin() {
    this.drawFace(this.ctx, this.radius, this.timeOffset);
    this.drawNumbers(this.ctx, this.radius, this.timeOffset);
    this.drawTime(this.ctx, this.radius, this.timeOffset);
  }

  start(){
    this.transl();
    setInterval(()=> this.timeBerlin(), 1000);
  }
}