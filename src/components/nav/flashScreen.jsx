import "./flash.css";
import Typewriter from "./typeWriter";

export default function FlashScreen() {
  // Buy Utility
  // Buy Data Buy Airtime
  return (
    <div className="flash">
      <div>
        <h1>
          <Typewriter text="SUBEASILY" delay={500} infinite />
        </h1>
        <p>Making Life&apos;s Ease</p>
      </div>
    </div>
  );
}
