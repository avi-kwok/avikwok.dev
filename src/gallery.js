// ??? page photo gallery: data, responsive image props, and background preloading.

// Newest first (Beer in Japan sits beside Joji so the half-width pair fills a row).
// `name` maps to public/gallery/<name>-<width>.webp; w/h are the aspect so the layout doesn't jump.
// To add a photo: export two WebPs (800 + 1600 wide for `wide`, 450 + 900 otherwise) into public/gallery.
export const photos = [
  { name: 'teddybear',   caption: 'TEDDY BEAR???',                            date: '11/03/2026', wide: true, w: 1600, h: 1067 },
  { name: 'minecraftpr', caption: 'New speedrun PB of 16:49.864 - shoutout Jon Ko for being the GOAT mentor', date: '10/04/2026', wide: true, w: 1600, h: 900 },
  { name: 'joji',        caption: 'Joji in Seattle ‼️',                        date: '07/19/2026', w: 900, h: 1200 },
  { name: 'japanbeer',   caption: 'Beer in Japan ✅',                          date: '04/30/2026', w: 900, h: 1200 },
  { name: 'GC2',         caption: 'Hit 0.3% of all Rocket League players!',   date: '06/15/2026', wide: true, w: 1600, h: 898 },
]

// Gallery column is max-w-xl (576px) inside px-6 gutters.
export function imgProps(ph) {
  const [sm, lg] = ph.wide ? [800, 1600] : [450, 900]
  return {
    src: `/gallery/${ph.name}-${lg}.webp`,
    srcSet: `/gallery/${ph.name}-${sm}.webp ${sm}w, /gallery/${ph.name}-${lg}.webp ${lg}w`,
    sizes: ph.wide ? '(min-width: 624px) 576px, calc(100vw - 48px)' : '(min-width: 624px) 280px, calc(50vw - 32px)',
  }
}

// Called while the visitor is on the Yoshi select screen, so ??? opens with photos already cached.
// Uses the same srcset/sizes as the page, so the browser picks (and caches) the same file.
let preloaded = false
export function preloadGallery() {
  if (preloaded) return
  preloaded = true
  const run = () => {
    new Image().src = '/specialyoshi.png'
    photos.forEach(ph => {
      const img = new Image()
      const { src, srcSet, sizes } = imgProps(ph)
      img.sizes = sizes
      img.srcset = srcSet
      img.src = src
    })
  }
  if ('requestIdleCallback' in window) requestIdleCallback(run, { timeout: 2000 })
  else setTimeout(run, 800)
}

