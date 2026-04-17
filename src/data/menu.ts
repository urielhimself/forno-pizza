export interface MenuItem {
  id: string
  number: string
  label: string
  name: string
  nameItalic: string
  desc: string
  ingredients: string[]
  price: string
  variant: 'margherita' | 'marinara' | 'diavola'
  spinReverse?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: 'margherita',
    number: 'N°01 — ROSSA',
    label: '',
    name: 'Margherita',
    nameItalic: 'D.O.P.',
    desc: 'Naples, 1889. We haven\'t found a reason to improve on it. San Marzano tomatoes, a handful of fior di latte, two leaves of basil, a thread of olive oil. The fire does the rest.',
    ingredients: ['San Marzano', 'Fior di Latte', 'Basilico', 'Olio EVO', 'Sale Marino'],
    price: '₪72',
    variant: 'margherita',
  },
  {
    id: 'marinara',
    number: 'N°02 — BIANCA',
    label: '',
    name: 'Marinara',
    nameItalic: 'alla Napoletana',
    desc: 'No cheese. No apology. A purists\' pizza of tomato, garlic, oregano, and olive oil. Older than the Margherita by a century, and arguably the truer test of a pizzaiolo.',
    ingredients: ['Pomodoro', 'Aglio', 'Origano', 'Olio EVO'],
    price: '₪64',
    variant: 'marinara',
    spinReverse: true,
  },
  {
    id: 'diavola',
    number: 'N°03 — NERA',
    label: '',
    name: 'Diavola',
    nameItalic: 'fumante',
    desc: 'For the brave. Spicy salame from Calabria, smoked mozzarella, a generous pinch of chili oil. Charred aggressively on purpose. Not for the polite.',
    ingredients: ['Salame Piccante', 'Mozzarella Affumicata', 'Olio al Peperoncino', 'Origano'],
    price: '₪84',
    variant: 'diavola',
  },
]
