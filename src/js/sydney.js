import Draw from "./draw";

 export default class Sydney extends Draw {

  constructor(){
    super('sydney', 10);
  }
  
  timeSydney() {
    this.drawFace(this.ctx, this.radius, this.timeOffset);
    this.drawNumbers(this.ctx, this.radius, this.timeOffset);
    this.drawTime(this.ctx, this.radius, this.timeOffset);
  }

  start(){
    this.transl();
    setInterval(()=> this.timeSydney(), 1000);
  }
}