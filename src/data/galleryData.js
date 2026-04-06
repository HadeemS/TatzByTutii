import handOfGod from '../assets/images/HandOfGodTat.jpg'
import crownChest from '../assets/images/CrownChestTat.jpg'
import img971026 from '../assets/images/971026D3-359E-4A56-9918-9962A99809B9.JPG'
import img4827 from '../assets/images/4827FB91-A5DD-4AC7-9FD7-2F29E1C421E9.JPG'
import skeletons from '../assets/images/Skeletons.JPG'

import mov1 from '../assets/images/8dd7e67466f9471384d49e5075853a30.MOV'
import mov2 from '../assets/images/4b6c6d85f9df4f7e8d890613535d46a0.MOV'
import mov3 from '../assets/images/562c10f0a6a84fee9a314385a483f874.MOV'
import movHandOfGod from '../assets/images/handofgod.MOV'
import movChest from '../assets/images/bigchstpiece.MOV'

export const galleryCategories = [
  'All',
  'Fine Line',
  'Black & Grey',
  'Script',
  'Custom Pieces',
  'Video',
  'Flash',
]

/**
 * Each image / video file is used at most once in this list.
 * Videos use inline preview in the grid (no duplicate poster image).
 *
 * @typedef {{ id: number; title: string; category: string; mediaType: 'image' | 'video'; thumbnail?: string; src: string; description: string }} GalleryItem
 */

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    id: 1,
    title: 'Hand of God',
    category: 'Custom Pieces',
    mediaType: 'image',
    thumbnail: handOfGod,
    src: handOfGod,
    description: 'Custom composition — detail and contrast tailored to placement.',
  },
  {
    id: 2,
    title: 'Crown chest piece',
    category: 'Black & Grey',
    mediaType: 'image',
    thumbnail: crownChest,
    src: crownChest,
    description: 'Black and grey work with strong focal flow across the chest.',
  },
  {
    id: 3,
    title: 'Skeletons',
    category: 'Custom Pieces',
    mediaType: 'image',
    thumbnail: skeletons,
    src: skeletons,
    description: 'Illustrative piece with depth and controlled line.',
  },
  {
    id: 4,
    title: 'Portrait & tone',
    category: 'Black & Grey',
    mediaType: 'image',
    thumbnail: img971026,
    src: img971026,
    description: 'Depth, soft gradients, and readable contrast.',
  },
  {
    id: 5,
    title: 'Script & lettering',
    category: 'Script',
    mediaType: 'image',
    thumbnail: img4827,
    src: img4827,
    description: 'Custom lettering with flow and clarity.',
  },
  {
    id: 6,
    title: 'Studio clip 1',
    category: 'Video',
    mediaType: 'video',
    src: mov1,
    description: 'Session footage — process and detail.',
  },
  {
    id: 7,
    title: 'Studio clip 2',
    category: 'Video',
    mediaType: 'video',
    src: mov2,
    description: 'Behind the needle — pacing, stencil, and line.',
  },
  {
    id: 8,
    title: 'Studio clip 3',
    category: 'Video',
    mediaType: 'video',
    src: mov3,
    description: 'Close-up detail and shading passes.',
  },
  {
    id: 9,
    title: 'Hand of God — video',
    category: 'Video',
    mediaType: 'video',
    src: movHandOfGod,
    description: 'Clip focused on the Hand of God piece.',
  },
  {
    id: 10,
    title: 'Chest piece — video',
    category: 'Video',
    mediaType: 'video',
    src: movChest,
    description: 'Full context on skin.',
  },
]
