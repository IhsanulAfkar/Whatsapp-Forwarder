import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const Window = styled.div`
  margin: 8px;
`;

const Button = styled.button`
  padding: 12px;
`;

const Box = styled(animated.div)`
  width: 32px;
  height: 32px;
  margin: 16px;
  border-radius: 8px;
  background-color: red;
`;

export default function App() {
    const [isShowing, setIsShowing] = useState(false);

    const opacityTransition = useTransition(isShowing, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    const transformTransition = useTransition(isShowing, {
        from: { transform: "translateX(300px)" },
        enter: { transform: "translateX(0px)" },
        leave: { transform: "translateX(300px)" }
    });

    return (
        <Window>
            <Button onClick={() => setIsShowing(!isShowing)}>
                {isShowing ? "Hide" : "Show"}
            </Button>
            {opacityTransition((style, item) => item && <Box style={style} />)}
            {transformTransition((style, item) => item && <Box style={style} />)}
        </Window>
    );
}
