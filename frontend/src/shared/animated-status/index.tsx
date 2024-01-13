import "./animated-status.css";
import { Animate, AnimateGroup } from "react-simple-animate";

interface AnimatedStatusProps {
  status: string;
}

export default function AnimatedStatus({ status }: AnimatedStatusProps) {
  return (
    <>
      <AnimateGroup play>
        <div className="wrapper">
          <Animate
            duration={1}
            delay={0.2}
            start={{
              transform: "translateX(0px)",
            }}
            end={{ transform: "translateX(200px)" }}
            sequenceIndex={0}
          >
            <div className="digit">
              <div className="red-dot" />
              <div className="red-dot hidden" />
              <div className="red-dot" />
              <div className="red-dot" />
              <div className="red-dot hidden" />
              <div className="red-dot" />
            </div>
          </Animate>
          <Animate
            duration={1}
            delay={0.2}
            start={{
              transform: "translateX(0px)",
            }}
            end={{ transform: "translateX(200px)" }}
            sequenceIndex={0}
          >
            <div className="digit">
              <div className="red-dot" />
              <div className="red-dot" />
              <div className="red-dot" />
              <div className="red-dot" />
              <div className="red-dot" />
              <div className="red-dot" />
            </div>
          </Animate>
          <Animate
            duration={1}
            delay={0.2}
            start={{
              transform: "translateX(0px)",
            }}
            end={{ transform: "translateX(200px)" }}
            sequenceIndex={0}
          >
            {status === "401" ? (
              <div className="digit one">
                <div className="red-dot" />
                <div className="red-dot" />
                <div className="red-dot" />
              </div>
            ) : (
              <div className="digit">
                <div className="red-dot" />
                <div className="red-dot" />
                <div className="red-dot" />
                <div className="red-dot" />
                <div className="red-dot" />
                <div className="red-dot" />
              </div>
            )}
          </Animate>
        </div>
      </AnimateGroup>
    </>
  );
}
