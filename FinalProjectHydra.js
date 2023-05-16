osc().modulate(noise(3),()=>a.fft[]).out(o0)

a.show()

solid().out()


solid(()=>a.fft[0]*0.6,()=>a.fft[0]*0.1,()=>a.fft[0]*0.9).out();


a.setBins(3)
a.setCutoff(7)
a.setScale(9)
a.setSmooth(0.3)

osc(6, 0, 0.8)
  .color([0.2,0.7].smooth().fast(0.5), [0.4,0.9,0.2].smooth().fast(2.5),[.90,0.1,0.4].smooth())
  .rotate(2, 0.15)
  .pixelate([20, 50, 7, 5, 7, 8, 10, 20, 50].fast(10), 10)
  .mult(osc(40, [0.05,0.2]).thresh(0.4).rotate(0, -0.02))
.mask(
  solid(0,0,0)
.invert(()=>a.fft[1])
// causes stutter
// .posterize([1,5,20,30,300].smooth(),0.5)
// .contrast([1,1.7,1,1.5,1].smooth())
// .luma([0, 0.1, 0.05, -0.1].smooth().fast(1.5))
// tiling
)
.modulateRepeat(osc(10),[0].smooth(),[0].smooth().fast(0.8),0.2,0.2)
.scrollX(0.7,0.2)
//transition out effects
.saturate([1].smooth().fast(10))
.brightness(-0.1)
.out(o0);

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

//clouds of passage
//by Nesso
//www.nesso.xyz

shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
.color((0.2,0.4,0.3)*a.fft[0])
.scrollX(()=>Math.sin(time*a.fft[1]))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
  .color((0.6,0.2,0.5)*a.fft[0])
  .scrollY(0.35)
  .scrollX(()=>Math.sin(time*0.33)))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
  .color((0.2,0.4,0.6)*a.fft[2])
  .scrollY(-0.35)
  .scrollX(()=>Math.sin(time*0.41)*-1))
.add(
      src(o0).shift(0.001,0.01,0.001)
      .scrollX([0.05,-0.05].fast(0.1).smooth(1))
      .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
      ,0.85)
.modulate(voronoi(10,2,2))
.mask(
  solid(0,0,0)
.invert(()=>a.fft[1]*2))
.out(o0)œ

noise(20,1)
.thresh(0.95,0.1)
.blend(
noise(20,2)
.thresh([0.5,0.6].fast(1),0.1)
.pixelate([20,20],[20,20])
.color(()=>a.fft[0],()=>a.fft[1],()=>a.fft[2])
.colorama(0)
.saturate(10)
.scrollX(5,0),
0.1
)
.brightness(()=>a.fft[2]-0.9).saturate(1.2)
.out(o0);


// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//tropical juice
//by Ritchse
//instagram.com/ritchse
voronoi(2,0.3,0.2).shift(0.5)
.modulatePixelate(voronoi(4,0.2),32,2)
.scale(()=>1+(Math.sin(time*2.5)*0.05))
.diff(voronoi(3).shift(()=>a.fft[1]))
.diff(osc(2,0.15,1.1).rotate())
.brightness(() => a.fft[0]-0.7).contrast(1.2).saturate(1.2)
	.out(o0)
