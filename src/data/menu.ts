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
    desc: 'נאפולי, 1889. לא מצאנו סיבה לשפר על זה. עגבניות סן מרצנו, קומץ פיור דה לאטה, שני עלי בזיליקום, חוט שמן זית. האש עושה את השאר.',
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
    desc: 'ללא גבינה. ללא התנצלות. פיצה של פוריסטים: עגבניות, שום, אורגנו ושמן זית. קדומה למרגריטה בכמאה שנה, וטיעון חזק יותר לאיכות הפיצאיולו.',
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
    desc: 'לאמיצים. סלמה חריף מקלבריה, מוצרלה מעושנת, קורט שמן פלפל שחלים. נשרפת בכוונה. לא למנומסים.',
    ingredients: ['Salame Piccante', 'Mozzarella Affumicata', 'Olio al Peperoncino', 'Origano'],
    price: '₪84',
    variant: 'diavola',
  },
]
