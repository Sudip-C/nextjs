"use client"
import React, { useState } from 'react';
import styles from '../page.module.css';
import { useRouter } from 'next/navigation';

const TextToSpeech = () => {
  const [Text, setText] = useState('');
  const synthesisSupported = 'speechSynthesis' in window;
  const router=useRouter()
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    if (synthesisSupported) {
      const utterance = new SpeechSynthesisUtterance(Text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser. Please use a modern browser.');
    }
  };

  return (
    <>
    <div className={styles.navbar}>
      <p onClick={()=>router.push("/")}>Home</p>
      <p onClick={()=>router.push("/text-to-speech")}>Text to speech</p>
      <p onClick={()=>router.push("/speech-to-text")}>Speech to Text</p>
    </div>
    <div className={styles.converter} >
    <h1>Text to Speech</h1>
      <textarea class="font-extrabold" rows="4" cols="50" value={Text} onChange={handleInputChange} />
      <br />
      <button onClick={handleSpeak} disabled={!Text.trim()}>
        Speak
      </button>
    </div>
    </>
  );
};

export default TextToSpeech;