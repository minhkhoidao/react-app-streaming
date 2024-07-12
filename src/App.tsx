import { useState } from "react";
import "./App.css";
import { ReactMic } from "react-mic";

function App() {
  const [record, setRecord] = useState(false);

  const startRecording = () => setRecord(true);
  const stopRecording = () => setRecord(false);

  const onData = (recordedBlob: any) => {
    console.log(recordedBlob);
  };

  return (
    <div>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={stopRecording}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
        mimeType="audio/wav"
      />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
    </div>
  );
}

export default App;
