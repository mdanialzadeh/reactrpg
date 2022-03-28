import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import ground from "./Assets/Images/ground1.png";
import layer2 from "./Assets/Images/ground.png";
import layer3 from "./Assets/Images/layer3sprite.png";
import Animation from "./Assets/Animation";
import knightRun from "./Assets/Classes/Knight/knightRun.png";

function charTravel() {
  return (
    <div className="travel-container">
      <div className="travel-background" style={{ zIndex: "2" }}>
        <Spritesheet
          autoplay={true}
          image={ground}
          widthFrame={700}
          heightFrame={425}
          steps={15}
          fps={6}
          loop={true}
        />
      </div>
      <div className="travel-background" style={{ zIndex: "11" }}>
        <Spritesheet
          autoplay={true}
          image={layer2}
          widthFrame={700}
          heightFrame={425}
          steps={4}
          fps={4}
          loop={true}
        />
      </div>
      <div className="travel-background" style={{ zIndex: "1" }}>
        <Spritesheet
          autoplay={true}
          image={layer3}
          widthFrame={700}
          heightFrame={425}
          steps={4}
          fps={2}
          loop={true}
        />
      </div>

      <div className="game-canvas">
        <div className="user-canvas">
          <div className="charContainer" style={{ zIndex: "10" }}>
            <Animation animation={knightRun} steps={4} loop={true} fps={6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default charTravel;
