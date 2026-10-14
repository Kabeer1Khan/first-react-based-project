// All images come from Unsplash. To swap one, just replace the photo id below
// (the part after images.unsplash.com/).
const u = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const projects = [
  {
    id: 'horizon',
    title: 'The Horizon Villa',
    desc: 'A modern villa that blends natural surroundings with minimal architecture.',
    bg: u('photo-1613490493576-7fde63acd811', 2200),
    thumb: u('photo-1613490493576-7fde63acd811', 600),
  },
  {
    id: 'cliffside',
    title: 'Cliffside Retreat',
    desc: 'Glass and stone perched above the valley, framing the view from every room.',
    bg: u('photo-1600596542815-ffad4c1539a9', 2200),
    thumb: u('photo-1600596542815-ffad4c1539a9', 600),
  },
  {
    id: 'lakeview',
    title: 'Lakeview Residence',
    desc: 'A calm family home with a terrace pool that mirrors the evening sky.',
    bg: u('photo-1512917774080-9991f1c4c750', 2200),
    thumb: u('photo-1512917774080-9991f1c4c750', 600),
  },
  {
    id: 'pavilion',
    title: 'Serene Pavilion',
    desc: 'Open-plan living wrapped in warm timber, light and quiet landscaping.',
    bg: u('photo-1600585154340-be6161a56a0c', 2200),
    thumb: u('photo-1600585154340-be6161a56a0c', 600),
  },
  {
    id: 'dune',
    title: 'Dune House',
    desc: 'A sculpted coastal residence shaped by wind, sand and golden light.',
    bg: u('photo-1564013799919-ab600027ffc6', 2200),
    thumb: u('photo-1564013799919-ab600027ffc6', 600),
  },
  {
    id: 'alpine',
    title: 'Alpine Lodge',
    desc: 'Interiors that feel sheltered, tactile and effortlessly timeless.',
    bg: u('photo-1600607687939-ce8a6c25118c', 2200),
    thumb: u('photo-1600607687939-ce8a6c25118c', 600),
  },
]

export const people = [
  u('photo-1507003211169-0a1dd7228f2d', 120),
  u('photo-1494790108377-be9c29b29330', 120),
]

export const ctaAvatar = u('photo-1438761681033-6461ffad8d80', 160)

export default projects