export interface Terminology {
    id: string,
    title: string,
    desc: string,
    chapter: chapter,
    creator: string
}

export enum chapter {
    Web = 'Das Web', 
    HTML = 'HTML',
    CSS = 'CSS',
    Client_Side_Scripting_1 = 'JavaScript, DOM, AJAX',
    Client_Side_Scripting_2 = 'Bibliotheken / Frameworks',
    SPA_Frameworks = 'SPA-Frameworks: Architektur, Angular',
    PHP = 'Server-Side Scripting: PHP, ...',
    Server_Side_Frameworks = 'Server-Side Frameworks',
    CMS_LMS = 'CMS, LMS, ...',
    END = 'SEO, Sicherheit, Geschichte ...'
}

export const TERMINOLOGIES: Terminology[] = [
    {
      id: 'abc',
      title: 'HTML',
      desc: 'HyperText Markup Language',
      chapter: chapter.HTML,
      creator: 'Me'
    },
    {
      id: 'def',
      title: 'Client-Server-Prinzip',
      desc: 'Lorem Ipsum etc',
      chapter: chapter.Web,
      creator: 'Me'
    },
    {
      id: 'ghi',
      title: 'CSS',
      desc: 'Cascading Style Sheets',
      chapter: chapter.CSS,
      creator: 'Me'
    }
    // ... and so on
  ]