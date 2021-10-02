export interface Terminology {
  id: number;
  title: string;
  desc: string;
  chapter: Chapter;
  creator: string;
}

export enum Chapter {
  Web = 'Das Web',
  HTML = 'HTML',
  CSS = 'CSS',
  Client_Side_Scripting_1 = 'JavaScript, DOM, AJAX',
  Client_Side_Scripting_2 = 'Bibliotheken / Frameworks',
  SPA_Frameworks = 'SPA-Frameworks: Architektur, Angular',
  PHP = 'Server-Side Scripting: PHP, ...',
  Server_Side_Frameworks = 'Server-Side Frameworks',
  CMS_LMS = 'CMS, LMS, ...',
  END = 'SEO, Sicherheit, Geschichte ...',
}

export const ChapterAsArray: Array<string> = Object.keys(Chapter).filter(
  (key) => isNaN(+key)
);

export const Terminologies: Terminology[] = [
  {
    id: 1,
    title: 'HTML',
    desc: 'HyperText Markup Language',
    chapter: Chapter.HTML,
    creator: 'Me',
  },
  {
    id: 2,
    title: 'Client-Server-Prinzip',
    desc: 'Lorem Ipsum etc',
    chapter: Chapter.Web,
    creator: 'Me',
  },
  {
    id: 3,
    title: 'CSS',
    desc: 'Cascading Style Sheets',
    chapter: Chapter.CSS,
    creator: 'Me',
  },

  // ... and so on
];
