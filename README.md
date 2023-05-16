# Final Project
## Ken Kobayashi SP23

## ***LINK TO MY VIDEO***

[Link](https://drive.google.com/file/d/1tzQb5-tWMCJNZq436M7gle4nGj7e5-HX/view?usp=sharing)

## Project Outline

My project will be a live performance using FoxDot and Hydra.
Hydra will use fft to process the audio of the performance to modulate the visuals, and OSC messages will be used to switch between Hydra presets I will create in advance.

## FFT Set Up

Setting up fft in Atom-Hydra was slightly difficult.

I had to install atom, which is depreciated, and the atom-hydra package required some workarounds provided in the documentation of hydra.

The main problem comes with setting up the audio feed.

In my mac os, atom no longer requests access to the microphone.

After some research, [this github post](https://github.com/hydra-synth/atom-hydra/issues/35#issuecomment-939560964) gave the solution: run the unix executable of Atom.

This allowed for the audio feed to work.

I set up the internal audio routing of my laptop with Audi MIDI Setup and Soundflower to output sound to the headphone jack and to Hydra, allowing for the hydra to listen into the performance and modulate to the music.


## Hydra

```
osc().modulate(noise(3),()=>a.fft[0]).out(o0)

a.show()

solid().out()

a.setBins(4)
a.setCutoff(5)
a.setScale(10)
a.setSmooth(0.8)


// osc(6, 0, 0.8)
//   .color([0.2,0.7].smooth().fast(0.5), [0.4,0.9,0.2].smooth().fast(2.5),[.90,0.1,0.4].smooth())
//   .rotate(2, 0.15)
//   .pixelate([20, 50, 7, 5, 7, 8, 10, 20, 50].fast(10), 10)
//   .mult(osc(40, [0.05,0.2]).thresh(0.4).rotate(0, -0.02))
// .mask(solid(0,0,0)
// .invert([()==>a.fft[0]].smooth())
// //causes stutter
// .posterize([1,5,20,30,300].smooth(),0.5)
// .contrast([1,1.7,1,1.5,1].smooth())
// .luma([0, 0.1, 0.05, -0.1].smooth().fast(1.5))
// //tiling
// )
// //.modulateRepeat(osc(10),[0].smooth(),[0].smooth().fast(0.8),0.2,0.2)
// .scrollX(0.7,0.2)
// //transition out effects
// .saturate([1].smooth().fast(10))
// .brightness(-0.1)
// .out();
//
// noise(20,1)
// .thresh(0.95,0.1)
// .blend(
// noise(20,2)
// .thresh([0.9,0.9].fast(1),0.1)
// .pixelate([20,20],[20,20])
// .color(0.1,0.2,0.5)
// .colorama(0)
// .saturate(10)
// .scrollX(5,0),
// 0.1
// )
// .mask(
// solid(0,0,0)
// .invert(()=>a.fft[0])
// )
// .out();

solid(()=>a.fft[0]).out();



//https://github.com/MrMebelMan/algorithmic-music/blob/master/Hydra/OSC/foxdot_hydra.js
// Configure OSC port to receive messages to (optional)
msg.setPort(57101);

foxdot = {}

msg.on('/s_new', (args) => {
	// 'hydra' is a special FoxDot synthdef that does not produce any sounds,
	// but has handy attributes that are named after Hydra functions, like "kaleid", "rotate" etc.
	// The synthdef's source code is here: https://github.com/MrMebelMan/FoxDot/blob/killa_features/FoxDot/osc/scsyndef/hydra.scd
	// Inspired by CrashServer's "video" synthdef <3
	if (args[0] === 'hydra') {
		// We don't need first 6 parameters, so we'll skip them
		args = args.slice(6);
		// Iterate over the OSC bundle and fill the "foxdot" object with synthdef's properties
		for(var i = 0; i < args.length; i += 2) {
			foxdot[args[i]] = args[i + 1]
		}
	}
});

// We want properties to update automatically, so we need to use an arrow function.
shape(() => foxdot.sample).out()
```

## Performance
To prepare for my performance, I prepared most of the code.

I created 4 hydra patches, 2 from the midterm performance, and two based on Hydra examples from the website sandbox.
All of them react to the audio through fft.

I wanted these 4 patches to switch every so often automatically, so the visuals would be completely hands off, but my computer couldn't handle having 4 patches all processing at the same time. There may be a more computationally better way to create this effect, but I decided to change the patches manually instead.

For my FoxDot patch, I prepared the chords and instruments. I played around with them for around 2 hours exploring all of the attributes and effects that I could use, and took note of which ones were most noticable and interesting. I then changed these attributes during the performance.

My obs recording settings were off, so a quarter of the screen is cut off unfortunately.

I enjoyed this class a lot! I saw programming for music from more of a programmer's perspective, and this class showed a musical approach to it, improvising and using more loose logic to create unpredictable results. I did a deep dive into SuperCollider to use in another class, as this class exposed me to it and I was curious to how it works. The project involved a VR instrument made in Unity, sending OSC messages to SuperCollider to play a synth and control parameters.

Thank you for a great class! I leared a lot of valuable skills!

-Ken