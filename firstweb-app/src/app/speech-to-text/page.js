"use client"
import 'regenerator-runtime/runtime'
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from '../page.module.css'
import { useRouter } from 'next/navigation';

const SpeechToText = () => {
    const router=useRouter()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
    <div className={styles.navbar}>
      <p onClick={()=>router.push("/")} >Home</p>
      <p onClick={()=>router.push("/text-to-speech")}>Text to speech</p>
      <p onClick={()=>router.push("/speech-to-text")}>Speech to Text</p>
    </div>
    <div className={styles.converter}>
    <h1>Speech to Text</h1>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div style={{display:"flex",gap:"20px"}}>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      </div>
      <p>Result:{transcript}</p>
      
    </div>
    
    </>
    
  );
};
export default SpeechToText;