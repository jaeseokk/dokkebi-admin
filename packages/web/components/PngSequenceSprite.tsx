import { Container, Sprite, useTick } from "@pixi/react";
import * as PIXI from "pixi.js";
import { ComponentPropsWithoutRef, useState } from "react";

export interface PngSequencePlayerProps
  extends ComponentPropsWithoutRef<typeof Container> {
  sequence: string[];
  width: number;
  height: number;
  blendMode?: PIXI.BLEND_MODES;
  anchor?: [number, number];
  fps?: number;
}

const PngSequencePlayer = ({
  sequence,
  width,
  height,
  fps = 24,
  anchor = [0.5, 0.5],
  blendMode,
  ...rest
}: PngSequencePlayerProps) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const texture = PIXI.Texture.from(sequence[currentFrame]);

  useTick((delta) => {
    setElapsed(elapsed + delta);

    if (elapsed > 1 / fps) {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % sequence.length);
      setElapsed(0);
    }
  });

  return (
    <Container {...rest}>
      <Sprite
        texture={texture}
        width={width}
        height={height}
        anchor={anchor}
        blendMode={blendMode}
      />
    </Container>
  );
};

export default PngSequencePlayer;
