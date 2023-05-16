Root.default = "E#"

Scale.default = "dorian"

d1 >> play("   S  ")

d2 >> play("k     ")

d3 >> play(" ~- ~[~-]").every(2,"stutter",2)

d3.stop()

d3.spin = [-3,3,-0.4,0.6,0.6,0.2]

d_all.stop()


d1.hpf = 5000

p_all.stop()

p2 >> bass(var([8, 11, 3, 5], 5), dur = 1/4, sus = 1/16, pan = (-0.5,0.5), amplify = 0.7, oct = 4)+(0,2)
p2.sus = [1/16,1/16,1/16,1/16,1/4,{1/16, 1/4}]

p2.stop()


pttrnGen = PRand(0,10)
pttrnGen = pttrnGen[:10]
pttrnGen = pttrnGen.arp([0,8])
p4 >> twang(var(pttrnGen,1), dur = 1/2, oct = 4, amplify = 0.2).every(2,'shuffle')

p4.hpf = 4000

p4.chop = 2

p4.vibrato = 0
p4.spin = [-3, 3, -3]

chords = [(0,3,7),(1,5,7),(0,3,5)]

p3 >> karp(chords,dur = 1/2, sus = var([1/6,1/8,1/4],2))

p3.oct = 4

pttrnGen2 = PRand(0,14)
pttrnGen2 = pttrnGen2[:14]
pttrnGen2 = pttrnGen2.arp([0,8])
p6 >> nylon(var(pttrnGen2,1),dur = 1/4, sus = 1/8, vib = 5, amplify = 0.7, oct = 6)

p6.oct =5

p6.glide = 0

p6.drive = 0

p6.blur = 2

p6.spin = [-5,-2,0,2,5]

p5 >> nylon(chords[0], dur = 1)


Clock.set_tempo(110)
Clock.swing(0.8)

help(Clock)

#In app commands for resources
print(SynthDefs)

print(Samples)

print(FxList)

print(Attributes)

#Use multiple different players
#Synced to the beat, but not cycles
#"<>"to include multiple patterns in parallel
b1 >> play("{x, }[--]o[-(-o)]")
b2 >> play(" t (t[tt])", pan = 0)

b_all.amplify = 0.7

p2 >> quin(var([0,-3,0,5],4), dur = 1/4, oct = 5).every(6,"stutter",5)+(0,2,const(4))

#solo player
p2.solo()

#high pass all the "d" players
d_all.hpf = 1000

b_all.stop()

#affect all with master
Master().slidefrom = -0.1

Master().lpf = 8000


d1 >> play("<x( x)  ><---[--]><  o >")

d1.stop()
p_all.stop()
