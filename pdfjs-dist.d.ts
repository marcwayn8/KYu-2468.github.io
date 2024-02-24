declare module 'pdfjs-dist/build/pdf' {
    export const GlobalWorkerOptions: any;
    export function getDocument(url: string): any;
  }
  declare module 'react-pdf' {
    export const Document: any;
    export const Page: any;
    export const pdfjs: any;
  }
  declare module 'pdfjs-dist/build/pdf.worker.entry' {
    // This will be an empty file
  }