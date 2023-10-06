import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AppContext } from "../../context/app-provider";

export const SpeechRecognitionComponent = React.memo(() => {
  const { setTranscript, currentTheme } = React.useContext(AppContext);
  const [isListening, setIsListening] = useState(false);
  const {
    finalTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <i className="fa fa-microphone-slash" aria-hidden="true"></i>;
  }

  const listenContinuously = () => {
    if (browserSupportsContinuousListening) {
      SpeechRecognition.startListening({ continuous: false });
      setIsListening(true);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if(finalTranscript === "") return;
    setTranscript(finalTranscript);
    setIsListening(false);
  }, [finalTranscript])

  return (
    <span className="ic-microphone" onClick={listenContinuously}>
      <i class={`fa fa-microphone ${isListening ? currentTheme : ''}`} aria-hidden="true"></i>
    </span>
  );
});
