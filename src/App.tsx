import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Banner />
      </main>
      <Footer />
      <AudioPlayer
        autoPlay
        loop
        src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" // Replace with your audio file URL
        onPlay={(e) => console.log("Playing")}
      />
    </div>
  );
};

export default App;
