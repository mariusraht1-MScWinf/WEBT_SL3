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
      title: 'Begriff',
      desc: 'Lorem Ipsum etc',
      chapter: chapter.HTML,
      creator: 'Me'
    },
    {
      id: 'def',
      title: 'Begriff',
      desc: 'Lorem Ipsum etc',
      chapter: chapter.Web,
      creator: 'Me'
    },
    {
      id: 'ghi',
      title: 'Begriff',
      desc: 'Lorem Ipsum etc',
      chapter: chapter.CSS,
      creator: 'Me'
    }
    // ... and so on
  ]