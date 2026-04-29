/**
 * Sourced from sample-content-2.docx, sample-content.docx, Untitled document.docx,
 * Untitled document (1).docx (Matchbox), and Untitled document (2).docx (Envelope).
 * Notepads: sample-content-2 merged 250$4.00 and 500$3.75 as "250$4500$3.75"; restored as 250 @ $4.00, 500 @ $3.75.
 */
export const COLLATERAL_ITEMS = [
  {
    id: "letterhead",
    title: "Letterhead",
    vendor: { name: "Vistaprint", href: "https://www.vistaprint.com/stationery/letterhead" },
    pricing: [
      { quantity: 100, pricePerUnit: 0.87 },
      { quantity: 150, pricePerUnit: 0.67 },
      { quantity: 200, pricePerUnit: 0.63 },
      { quantity: 250, pricePerUnit: 0.6 },
      { quantity: 500, pricePerUnit: 0.49 },
      { quantity: 750, pricePerUnit: 0.37 },
      { quantity: 1000, pricePerUnit: 0.3 },
      { quantity: 1500, pricePerUnit: 0.27 },
      { quantity: 2500, pricePerUnit: 0.24 },
      { quantity: 10000, pricePerUnit: 0.2 },
    ],
  },
  {
    id: "envelope",
    title: "Envelope",
    vendor: {
      name: "Envelopes.com",
      href: "https://www.envelopes.com/envelopes-white-booklet-10-4-1-8x9-1-2-white-peel-and-seal-item-75746",
    },
    pricing: [
      { quantity: 50, pricePerUnit: 0.44 },
      { quantity: 100, pricePerUnit: 0.44 },
      { quantity: 250, pricePerUnit: 0.44 },
      { quantity: 500, pricePerUnit: 0.36 },
      { quantity: 750, pricePerUnit: 0.36 },
      { quantity: 1000, pricePerUnit: 0.36 },
    ],
  },
  {
    id: "postcards",
    title: "Postcards",
    vendor: { name: "MOO", href: "https://www.moo.com/us/postcards/original" },
    pricing: [
      { quantity: 25, pricePerUnit: 0.96 },
      { quantity: 50, pricePerUnit: 0.82 },
      { quantity: 100, pricePerUnit: 0.61 },
      { quantity: 250, pricePerUnit: 0.4 },
      { quantity: 500, pricePerUnit: 0.3 },
      { quantity: 1000, pricePerUnit: 0.19 },
      { quantity: 2500, pricePerUnit: 0.15 },
      { quantity: 5000, pricePerUnit: 0.13 },
      { quantity: 10000, pricePerUnit: 0.12 },
    ],
  },
  {
    id: "notepads",
    title: "Notepads",
    vendor: { name: "MOO", href: "https://www.moo.com/us/new/products/moo-notepads/small-50" },
    pricing: [
      { quantity: 30, pricePerUnit: 5.0 },
      { quantity: 100, pricePerUnit: 4.5 },
      { quantity: 250, pricePerUnit: 4.0 },
      { quantity: 500, pricePerUnit: 3.75 },
    ],
  },
  {
    id: "business-cards",
    title: "Business Cards",
    vendor: { name: "MOO", href: "https://www.moo.com/us/business-cards/original" },
    pricing: [
      { quantity: 50, pricePerUnit: 0.46 },
      { quantity: 100, pricePerUnit: 0.45 },
      { quantity: 200, pricePerUnit: 0.39 },
      { quantity: 400, pricePerUnit: 0.34 },
      { quantity: 600, pricePerUnit: 0.29 },
      { quantity: 800, pricePerUnit: 0.29 },
      { quantity: 1000, pricePerUnit: 0.26 },
      { quantity: 2000, pricePerUnit: 0.26 },
      { quantity: 5000, pricePerUnit: 0.26 },
      { quantity: 10000, pricePerUnit: 0.26 },
    ],
  },
  {
    id: "coasters",
    title: "Coasters",
    vendor: { name: "Vistaprint", href: "https://www.vistaprint.com/photo-gifts/paper-coasters" },
    pricing: [
      { quantity: 100, pricePerUnit: 0.98 },
      { quantity: 200, pricePerUnit: 0.98 },
      { quantity: 500, pricePerUnit: 0.93 },
      { quantity: 1000, pricePerUnit: 0.93 },
    ],
  },
  {
    id: "door-hangers",
    title: "Door Hangers",
    vendor: { name: "Vistaprint", href: "https://www.vistaprint.com/marketing-materials/door-hangers" },
    pricing: [
      { quantity: 50, pricePerUnit: 1.32 },
      { quantity: 100, pricePerUnit: 0.88 },
      { quantity: 250, pricePerUnit: 0.51 },
      { quantity: 500, pricePerUnit: 0.32 },
    ],
  },
  {
    id: "keychain",
    title: "Keychain",
    vendor: {
      name: "Alchemy Merch",
      href: "https://alchemymerch.com/collections/enamel-keychains/products/metal-motel-uv-keychains",
    },
    pricing: [
      { quantity: 50, pricePerUnit: 4.2 },
      { quantity: 100, pricePerUnit: 3.45 },
      { quantity: 200, pricePerUnit: 2.87 },
      { quantity: 300, pricePerUnit: 2.78 },
      { quantity: 400, pricePerUnit: 2.54 },
      { quantity: 500, pricePerUnit: 2.39 },
      { quantity: 750, pricePerUnit: 2.23 },
      { quantity: 1000, pricePerUnit: 2.15 },
    ],
  },
  {
    id: "pen",
    title: "Pen",
    vendor: {
      name: "MOO",
      href: "https://www.moo.com/us/new/products/recycled-aluminum-ultra-gel-ballpoint/silver-one-sided-engraving",
    },
    pricing: [
      { quantity: 150, pricePerUnit: 4.47 },
      { quantity: 200, pricePerUnit: 4.47 },
      { quantity: 250, pricePerUnit: 4.47 },
      { quantity: 300, pricePerUnit: 4.3 },
      { quantity: 400, pricePerUnit: 4.3 },
      { quantity: 500, pricePerUnit: 4.3 },
      { quantity: 1000, pricePerUnit: 4.12 },
    ],
  },
  {
    id: "tshirt",
    title: "Tshirt",
    vendor: {
      name: "Real Thread",
      href: "https://www.realthread.com/products/next-level-apparel-3604-unisex-ringer-t-shirt",
    },
    pricing: [
      { quantity: 30, pricePerUnit: 22.7 },
      { quantity: 40, pricePerUnit: 17.14 },
      { quantity: 50, pricePerUnit: 13.78 },
      { quantity: 100, pricePerUnit: 12.35 },
      { quantity: 200, pricePerUnit: 10.98 },
      { quantity: 500, pricePerUnit: 10.33 },
      { quantity: 1000, pricePerUnit: 9.79 },
    ],
  },
  {
    id: "sweatshirt",
    title: "Sweatshirt",
    vendor: {
      name: "Real Thread",
      href: "https://www.realthread.com/products/allmade-al4004-organic-french-terry-crewneck-sweatshirt",
    },
    pricing: [
      { quantity: 30, pricePerUnit: 38.12 },
      { quantity: 40, pricePerUnit: 32.56 },
      { quantity: 50, pricePerUnit: 29.2 },
      { quantity: 100, pricePerUnit: 27.77 },
      { quantity: 200, pricePerUnit: 26.4 },
      { quantity: 500, pricePerUnit: 25.75 },
      { quantity: 1000, pricePerUnit: 25.21 },
    ],
  },
  {
    id: "hat",
    title: "Hat",
    vendor: {
      name: "Real Thread",
      href: "https://www.realthread.com/products/yupoong-6245cm-adult-low-profile-classic-dad-cap",
    },
    pricing: [
      { quantity: 30, pricePerUnit: 18.97 },
      { quantity: 40, pricePerUnit: 16.58 },
      { quantity: 50, pricePerUnit: 15.52 },
      { quantity: 100, pricePerUnit: 15.12 },
      { quantity: 200, pricePerUnit: 14.44 },
      { quantity: 500, pricePerUnit: 13.68 },
      { quantity: 1000, pricePerUnit: 13.25 },
    ],
  },
  {
    id: "matchbox",
    title: "Matchbox",
    vendor: {
      name: "Vistaprint",
      href: "https://www.vistaprint.com/stationery/stationery/party-supplies/custom-matches",
    },
    pricing: [
      { quantity: 50, pricePerUnit: 0.75 },
      { quantity: 100, pricePerUnit: 0.7 },
      { quantity: 200, pricePerUnit: 0.7 },
      { quantity: 400, pricePerUnit: 0.68 },
      { quantity: 1500, pricePerUnit: 0.62 },
      { quantity: 5000, pricePerUnit: 0.62 },
    ],
  },
] as const;

export type CollateralId = (typeof COLLATERAL_ITEMS)[number]["id"];
export type PricingTier = (typeof COLLATERAL_ITEMS)[number]["pricing"][number];
