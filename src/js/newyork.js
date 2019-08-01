import Draw from "./draw";

export default class NewYork extends Draw {

  constructor(){
    super('new-york', -4);
  }

  timeNewYork() {
    this.drawFace(this.ctx, this.radius, this.timeOffset);
    this.drawNumbers(this.ctx, this.radius, this.timeOffset);
    this.drawTime(this.ctx, this.radius, this.timeOffset);
  }
  start(){
    this.transl();
    setInterval(()=> this.timeNewYork(), 1000);
  }
}