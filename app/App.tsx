import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar} from '@readyplayerme/visage';

const modelSrc = './public/kevin-avatar.glb'; // this can be a relative or absolute URL

export default function App() {
  return (
    <Avatar modelSrc={modelSrc} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));