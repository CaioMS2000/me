// Bebas Neue
// Bungee Spice
// Lilita One
// Orbitron
// Oswald
// Overlock SC
// Permanent Marker
// Russo One
// Tektur
import { Bungee, Bebas_Neue, Lilita_One, Orbitron, Oswald, Overlock_SC, Permanent_Marker, Russo_One, Tektur } from 'next/font/google';

const bungeeFont = Bungee({
	weight:['400'],
	subsets: ["latin"]
})
export const bungee = bungeeFont.className

const bebasFont = Bebas_Neue({
	weight:['400'],
	subsets: ["latin"]
})
export const bebas = bebasFont.className

const lilitaFont = Lilita_One({
	weight:['400'],
	subsets: ["latin"]
})
export const lilita = lilitaFont.className

const orbitroFont = Orbitron({
	weight:['400', '500', '700', '900'],
	subsets: ["latin"]
})
export const orbitron = orbitroFont.className

const oswaldFont = Oswald({
	weight:['400', '600', '700'],
	subsets: ["latin"]
})
export const oswald = oswaldFont.className

const overlockFont = Overlock_SC({
	weight: ['400'],
	subsets: ["latin"]
})
export const overlock = overlockFont.className

const permanent_markerFont = Permanent_Marker({
	weight: ['400'],
	subsets: ["latin"]
})
export const permanent_marker = permanent_markerFont.className

const russo_oneFont = Russo_One({
	weight: ['400'],
	subsets: ["latin"]
})
export const russo_one = russo_oneFont.className

const tekturFont = Tektur({
	weight: ['400'],
	subsets: ["latin"]
})
export const tektur = tekturFont.className