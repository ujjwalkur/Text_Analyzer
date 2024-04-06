import React from 'react';
import Navbar from './components/sidebar/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1f4061';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextArea mode={mode} />
    </>
  );
}
