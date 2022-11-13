import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  if (!listening) {
  console.log('fk this shit')
  }
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div onClick={SpeechRecognition.startListening({continuous: true})}>Start</div>
      <div onClick={SpeechRecognition.stopListening}>Stop</div>
      <div onClick={resetTranscript}>Reset</div>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;