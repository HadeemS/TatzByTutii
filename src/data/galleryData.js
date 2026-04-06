import handOfGod from '../assets/images/HandOfGodTat.jpg'
import crownChest from '../assets/images/CrownChestTat.jpg'
import skeletons from '../assets/images/Skeletons.JPG'
import inGodWeTrust from '../assets/images/4827FB91-A5DD-4AC7-9FD7-2F29E1C421E9.JPG'
import ambition from '../assets/images/Tat 1.jpeg'
import skullHammer from '../assets/images/Tat 2.jpeg'
import portrait from '../assets/images/Tat 3.jpeg'
import skullRed from '../assets/images/Tat 4.jpeg'

import mov1 from '../assets/images/8dd7e67466f9471384d49e5075853a30.MOV'
import mov2 from '../assets/images/4b6c6d85f9df4f7e8d890613535d46a0.MOV'
import mov3 from '../assets/images/562c10f0a6a84fee9a314385a483f874.MOV'

export const galleryCategories = [
  'All',
  'Photos',
  'Videos',
]

/**
 * Every tattoo appears once. Each file is used exactly once.
 *
 * @typedef {{ id: number; title: string; category: string; mediaType: 'image' | 'video'; thumbnail?: string; src: string; description: string }} GalleryItem
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 1,
    title: 'Hand of God',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: handOfGod,
    src: handOfGod,
    description: 'Praying hands with "Only God Can Judge Me" — custom black & grey forearm piece.',
  },
  {
    id: 2,
    title: 'Crown chest piece',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: crownChest,
    src: crownChest,
    description: 'Crown with Roman numerals — clean linework centered on the chest.',
  },
  {
    id: 3,
    title: 'Skeletons',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: skeletons,
    src: skeletons,
    description: 'Skeleton and flames forearm composition with bold contrast.',
  },
  {
    id: 4,
    title: 'In God We Trust',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: inGodWeTrust,
    src: inGodWeTrust,
    description: 'Custom lettering with clouds, sunburst, and scattered pills.',
  },
  {
    id: 5,
    title: 'Ambition script',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: ambition,
    src: ambition,
    description: 'Flowing cursive "Ambition" forearm script with ornamental flourishes.',
  },
  {
    id: 6,
    title: 'Skull & hammer',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: skullHammer,
    src: skullHammer,
    description: 'Black & grey skull with hammer — calf placement with smooth shading.',
  },
  {
    id: 7,
    title: 'Classical portrait',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: portrait,
    src: portrait,
    description: 'Realistic portrait on the calf — deep tonal work and soft gradients.',
  },
  {
    id: 8,
    title: 'Skull & thorns',
    category: 'Photos',
    mediaType: 'image',
    thumbnail: skullRed,
    src: skullRed,
    description: 'Skull with red accents and portrait overlay — illustrative upper arm piece.',
  },
  {
    id: 9,
    title: 'Studio session',
    category: 'Videos',
    mediaType: 'video',
    src: mov1,
    description: 'Session footage — process and detail.',
  },
  {
    id: 10,
    title: 'In the chair',
    category: 'Videos',
    mediaType: 'video',
    src: mov2,
    description: 'Behind the needle — pacing, stencil, and line.',
  },
  {
    id: 11,
    title: 'Close-up work',
    category: 'Videos',
    mediaType: 'video',
    src: mov3,
    description: 'Close-up detail and shading passes.',
  },
]
