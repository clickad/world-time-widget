import Draw from "./draw";


export default class Moscow extends Draw {

  constructor(){
    super('moscow', 3);
  }

  timeMoscow() {
    this.drawFace(this.ctx, this.radius, this.timeOffset);
    this.drawNumbers(this.ctx, this.radius, this.timeOffset);
    this.drawTime(this.ctx, this.radius, this.timeOffset);
  }

  start(){
    this.transl();
    setInterval(()=> this.timeMoscow(), 1000);
  }
}