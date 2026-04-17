export interface PressQuote {
  quote: string
  attribution: string
}

export interface StoryPanel {
  year: string
  title: string
  body: string
  visual: 'flame' | 'oven' | 'pies' | 'review' | 'today'
}

export const pressQuotes: PressQuote[] = [
  {
    quote:
      '"The crust is <em>a rumor</em> of a crust — thin, charred, structural in the way a good essay is structural. You finish the pizza, and the pizza finishes you."',
    attribution: '— Pete Wells, The New York Times · Four Stars',
  },
  {
    quote:
      '"In a city of loud restaurants, Forno is <em>almost silent.</em> The kitchen speaks only through the oven. The oven speaks only through the dough."',
    attribution: '— Time Out Tel Aviv · Restaurant of the Year 2024',
  },
  {
    quote:
      '"Three pizzas. Three. I asked if the menu had changed. The waiter just smiled. <em>It has not, and it will not.</em>"',
    attribution: '— Haaretz Food · Best Pizza in the Country',
  },
]

export const storyPanels: StoryPanel[] = [
  {
    year: '2017',
    title: 'The idea, in Naples.',
    body: 'Two years apprenticing under Enzo Coccia. One kilo of flour, one question: <em>how slow is too slow?</em>',
    visual: 'flame',
  },
  {
    year: '2019',
    title: 'First oven, Tel Aviv.',
    body: 'A Stefano Ferrara, shipped from Italy. Twelve weeks on the water. Lit on the first try.',
    visual: 'oven',
  },
  {
    year: '2021',
    title: 'Three pies, decided.',
    body: 'We tried eighteen. We kept three. The others weren\'t bad — they just weren\'t essential.',
    visual: 'pies',
  },
  {
    year: '2023',
    title: 'A four-star review.',
    body: "We didn't frame it. We taped it next to the oven, where it belongs.",
    visual: 'review',
  },
  {
    year: '2026',
    title: 'Today.',
    body: 'The oven is still on. The menu is still three. Come hungry.',
    visual: 'today',
  },
]
