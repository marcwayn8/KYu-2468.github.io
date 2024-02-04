/// <reference types="react-scripts" />

declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.pdf" {
  const content: string;
  export default content;
}
