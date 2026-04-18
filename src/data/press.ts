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
      '"הקרום הוא <em>שמועה</em> של קרום — דק, פחמי, מבני כמו מסאה טובה. אתה מסיים את הפיצה, והפיצה מסיימת אותך."',
    attribution: '— פיט וולס, הניו יורק טיימס · ארבעה כוכבים',
  },
  {
    quote:
      '"בעיר של מסעדות רועשות, פורנו <em>כמעט שקטה.</em> המטבח מדבר רק דרך התנור. התנור מדבר רק דרך הבצק."',
    attribution: '— טיים אאוט תל אביב · מסעדת השנה 2024',
  },
  {
    quote:
      '"שלוש פיצות. שלוש. שאלתי אם התפריט השתנה. המלצר רק חייך. <em>הוא לא השתנה, ולא ישתנה.</em>"',
    attribution: '— הארץ מזון · הפיצה הטובה ביותר בארץ',
  },
]

export const storyPanels: StoryPanel[] = [
  {
    year: '2017',
    title: 'הרעיון, בנאפולי.',
    body: 'שנתיים של חניכות אצל אנצו קוצ\'א. קילו אחד של קמח, שאלה אחת: <em>כמה איטי זה יותר מדי איטי?</em>',
    visual: 'flame',
  },
  {
    year: '2019',
    title: 'התנור הראשון, תל אביב.',
    body: 'סטפנו פרארה, שנשלח מאיטליה. שתים עשרה שבועות בים. הודלק בניסיון הראשון.',
    visual: 'oven',
  },
  {
    year: '2021',
    title: 'שלוש פיצות, הוחלט.',
    body: 'ניסינו שמונה עשרה. שמרנו שלוש. השאר לא היו רעות — הן פשוט לא היו הכרחיות.',
    visual: 'pies',
  },
  {
    year: '2023',
    title: 'ביקורת ארבעה כוכבים.',
    body: 'לא תלינו אותה במסגרת. הדבקנו אותה ליד התנור, שם היא שייכת.',
    visual: 'review',
  },
  {
    year: '2026',
    title: 'היום.',
    body: 'התנור עדיין דולק. התפריט עדיין שלוש. בואו רעבים.',
    visual: 'today',
  },
]
