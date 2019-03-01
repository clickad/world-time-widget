(()=>{
  'use stric';
  window.onload =  ()=>{
    //Crate canvas constructor
    function getCanvas(city, timeOffset){
      this.canvas = document.getElementById(city);
      this.timeOffset = timeOffset;
      this.ctx = this.canvas.getContext("2d"),
      this.radius =  this.canvas.height / 2,
      this.transl = ()=>{
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90; //Changes this to adjust clock size
      };
    }
    
    //New York time
    let ny = new getCanvas('new-york', -4);
    ny.transl();
    setInterval(timeNewYork, 1000);

    function timeNewYork() {
      drawFace(ny.ctx, ny.radius, ny.timeOffset);
      drawNumbers(ny.ctx, ny.radius, ny.timeOffset);
      drawTime(ny.ctx, ny.radius, ny.timeOffset);
    }

    //Berlin time
    let br = new getCanvas('berlin', 2);
    br.transl();
    setInterval(timeBerlin, 1000);

    function timeBerlin() {
      drawFace(br.ctx, br.radius, br.timeOffset);
      drawNumbers(br.ctx, br.radius, br.timeOffset);
      drawTime(br.ctx, br.radius, br.timeOffset);
    }

    //Moscow time
    let mc = new getCanvas('moscow', 3);
    mc.transl();
    setInterval(timeMoscow, 1000);

    function timeMoscow() {
      drawFace(mc.ctx, mc.radius, mc.timeOffset);
      drawNumbers(mc.ctx, mc.radius, mc.timeOffset);
      drawTime(mc.ctx, mc.radius, mc.timeOffset);
    }

    //Sydney time
    let sd = new getCanvas('sydney', 10);
    sd.transl();
    setInterval(timeSydney, 1000);

    function timeSydney() {
      drawFace(sd.ctx, sd.radius, sd.timeOffset);
      drawNumbers(sd.ctx, sd.radius, sd.timeOffset);
      drawTime(sd.ctx, sd.radius, sd.timeOffset);
    }

    //Draw circle 
    function drawFace(ctx, radius, city) {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2*Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.strokeStyle = '#bbb';
      ctx.lineWidth = 0;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.02, 0, 2*Math.PI);
      ctx.fillStyle = '#bbb';
      ctx.fill();
    }

    //Draw numbers
    function drawNumbers(ctx, radius, city) {
      let ang;
      let num;
      ctx.font = radius*0.13 + "px arial";
      ctx.textBaseline="middle";
      ctx.textAlign="center";

      for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
      }
    }

    //Draw time animation
    function drawTime(ctx, radius, city){
      let time = city;
      let now  = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 + time * 3600 * 1000);
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      let mid ='';
  
      hour > 12 ? mid = 'PM' : mid = 'AM';
      ctx.font = radius*0.18 + "px arial";
      ctx.fillText(mid.toString(), 0, radius*0.60);

      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
      drawHand(ctx, hour, radius*0.5, radius*0.02, city);

      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      drawHand(ctx, minute, radius*0.8, radius*0.02, city);

      // second
      second=(second*Math.PI/30);
      drawHand(ctx, second, radius*0.9, radius*0.01), city;
    }

    //Draw hands
    function drawHand(ctx, pos, length, width, city) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }
  };
})();