import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Answer from "./components/Answer";
import MainChat from "./components/MainChat";


function App() {
  const [level, setLevel] = useState(1)
  const levelsArrObj = [
    {
      level: 1,
      duration: 30000,
      bgImage: "/mario/mario-bros-background.jpg",
      initialRandomNumber: Math.floor(Math.random() * 10) + 1,
      title: "Guess The number between 1 and 10",
      difficulty: "Easy",
      bgMusic: "/mario/bg-music.mp3",
      sendBtnMusic: "/mario/send-btn.mp3",
      winningMusic: "/mario/winning.mp3",
    },
    {
      level: 2,
      duration: 60000,
      bgImage: "/angry-birds/angry-birds-background.jpg",
      initialRandomNumber: Math.floor(Math.random() * 100) + 1,
      title: "Guess The number between 1 and 100",
      difficulty: "Medium",
      bgMusic: "/angry-birds/bg-music.mp3",
      sendBtnMusic: "/angry-birds/send-btn.mp3",
      winningMusic: "/angry-birds/winning.mp3",
    },
    {
      level: 3,
      duration: 120000,
      bgImage: "/subway-surfers/subway-surfers-background.png",
      initialRandomNumber: Math.floor(Math.random() * 1000) + 1,
      title: "Guess The number between 1 and 1000",
      difficulty: "Hard",
      bgMusic: "/subway-surfers/bg-music.mp3",
      sendBtnMusic: "/subway-surfers/send-btn.mp3",
      winningMusic: "/subway-surfers/winning.mp3",
    },
    {
      level: 4,
      duration: 300000,
      bgImage: "/gta/gta-background.jpeg",
      initialRandomNumber: Math.floor(Math.random() * 10000) + 1,
      title: "Guess The number between 1 and 10000",
      difficulty: "Impossible",
      bgMusic: "/gta/bg-music.mp3",
      sendBtnMusic: "/gta/send-btn.mp3",
      winningMusic: "/gta/winning.mp3",
    }
  ]
  return (
    <div className="cover" style={{
      background: `url(${process.env.PUBLIC_URL}${levelsArrObj[level - 1]?.bgImage})`, // Use process.env.PUBLIC_URL
    }}>
      {levelsArrObj.map((item, index) => {
        return (
          <div key={index}>
            {item.level === level && <div className="w-screen h-screen p-3 flex flex-col">
              <Answer level={item.level} title={item.title} initialRandomNumber={item?.initialRandomNumber} />
              <MainChat title={item.title} winningMusicData={item.winningMusic} sendBtnMusic={item.sendBtnMusic} bgMusicData={item.bgMusic} setLevel={setLevel} durationTime={item?.duration} initialRandomNumber={item?.initialRandomNumber} />
            </div>}
          </div>
        )

      })}

    </div >
  );
}

export default App;
