import { Sprite } from "@pixi/react";
import * as PIXI from "pixi.js";
import { useState } from "react";
import PngSequencePlayer from "./PngSequenceSprite";

export interface MapAssetsProps {}

const MapAssets = ({}: MapAssetsProps) => {
  const [skyTexture] = useState(() => {
    const videoElement = document.createElement("video");
    videoElement.crossOrigin = "anonymous";
    videoElement.src = "/map-assets/sky.mp4";
    videoElement.preload = "auto";
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.playsInline = true;
    videoElement.disablePictureInPicture = true;
    videoElement.muted = true;
    videoElement.style.display = "none";

    return PIXI.Texture.from(videoElement);
  });

  return (
    <>
      <Sprite
        texture={skyTexture}
        anchor={[0, 0]}
        scale={1}
        width={1024}
        height={576}
        x={0}
        y={0}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[0, 0]}
        scale={1}
        width={1024}
        height={576}
        x={1024}
        y={0}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={1420}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={1996}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={2572}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={3148}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={3724}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={4300}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={4876}
        zIndex={-1}
      />
      <Sprite
        texture={skyTexture}
        anchor={[1, 0]}
        scale={1}
        width={1024}
        height={576}
        x={2048}
        y={5452}
        zIndex={-1}
      />
      <PngSequencePlayer
        width={280}
        height={280}
        x={250}
        y={1732}
        sequence={[
          "/sequences/flagship/5flagship00.png",
          "/sequences/flagship/5flagship01.png",
          "/sequences/flagship/5flagship02.png",
          "/sequences/flagship/5flagship03.png",
          "/sequences/flagship/5flagship04.png",
          "/sequences/flagship/5flagship05.png",
          "/sequences/flagship/5flagship06.png",
          "/sequences/flagship/5flagship07.png",
          "/sequences/flagship/5flagship08.png",
          "/sequences/flagship/5flagship09.png",
          "/sequences/flagship/5flagship10.png",
          "/sequences/flagship/5flagship11.png",
          "/sequences/flagship/5flagship12.png",
          "/sequences/flagship/5flagship13.png",
          "/sequences/flagship/5flagship14.png",
          "/sequences/flagship/5flagship15.png",
          "/sequences/flagship/5flagship16.png",
          "/sequences/flagship/5flagship17.png",
          "/sequences/flagship/5flagship18.png",
          "/sequences/flagship/5flagship19.png",
          "/sequences/flagship/5flagship20.png",
          "/sequences/flagship/5flagship21.png",
          "/sequences/flagship/5flagship22.png",
          "/sequences/flagship/5flagship23.png",
          "/sequences/flagship/5flagship24.png",
          "/sequences/flagship/5flagship25.png",
          "/sequences/flagship/5flagship26.png",
          "/sequences/flagship/5flagship27.png",
          "/sequences/flagship/5flagship28.png",
          "/sequences/flagship/5flagship29.png",
          "/sequences/flagship/5flagship30.png",
          "/sequences/flagship/5flagship31.png",
          "/sequences/flagship/5flagship32.png",
          "/sequences/flagship/5flagship33.png",
          "/sequences/flagship/5flagship34.png",
          "/sequences/flagship/5flagship35.png",
          "/sequences/flagship/5flagship36.png",
          "/sequences/flagship/5flagship37.png",
          "/sequences/flagship/5flagship38.png",
        ]}
      />
      <PngSequencePlayer
        width={400}
        height={400}
        x={740}
        y={2840}
        sequence={[
          "/sequences/bboshong/11-2bboshong0.png",
          "/sequences/bboshong/11-2bboshong1.png",
          "/sequences/bboshong/11-2bboshong2.png",
          "/sequences/bboshong/11-2bboshong3.png",
          "/sequences/bboshong/11-2bboshong4.png",
          "/sequences/bboshong/11-2bboshong5.png",
          "/sequences/bboshong/11-2bboshong6.png",
          "/sequences/bboshong/11-2bboshong7.png",
          "/sequences/bboshong/11-2bboshong8.png",
          "/sequences/bboshong/11-2bboshong9.png",
          "/sequences/bboshong/11-2bboshong10.png",
          "/sequences/bboshong/11-2bboshong11.png",
          "/sequences/bboshong/11-2bboshong12.png",
          "/sequences/bboshong/11-2bboshong13.png",
          "/sequences/bboshong/11-2bboshong14.png",
          "/sequences/bboshong/11-2bboshong15.png",
          "/sequences/bboshong/11-2bboshong16.png",
          "/sequences/bboshong/11-2bboshong17.png",
          "/sequences/bboshong/11-2bboshong18.png",
          "/sequences/bboshong/11-2bboshong19.png",
          "/sequences/bboshong/11-2bboshong20.png",
          "/sequences/bboshong/11-2bboshong21.png",
          "/sequences/bboshong/11-2bboshong22.png",
          "/sequences/bboshong/11-2bboshong23.png",
          "/sequences/bboshong/11-2bboshong24.png",
          "/sequences/bboshong/11-2bboshong25.png",
          "/sequences/bboshong/11-2bboshong26.png",
          "/sequences/bboshong/11-2bboshong27.png",
          "/sequences/bboshong/11-2bboshong28.png",
          "/sequences/bboshong/11-2bboshong29.png",
          "/sequences/bboshong/11-2bboshong30.png",
          "/sequences/bboshong/11-2bboshong31.png",
          "/sequences/bboshong/11-2bboshong32.png",
          "/sequences/bboshong/11-2bboshong33.png",
          "/sequences/bboshong/11-2bboshong34.png",
          "/sequences/bboshong/11-2bboshong35.png",
          "/sequences/bboshong/11-2bboshong36.png",
          "/sequences/bboshong/11-2bboshong37.png",
          "/sequences/bboshong/11-2bboshong38.png",
          "/sequences/bboshong/11-2bboshong39.png",
          "/sequences/bboshong/11-2bboshong40.png",
          "/sequences/bboshong/11-2bboshong41.png",
          "/sequences/bboshong/11-2bboshong42.png",
          "/sequences/bboshong/11-2bboshong43.png",
          "/sequences/bboshong/11-2bboshong44.png",
          "/sequences/bboshong/11-2bboshong45.png",
          "/sequences/bboshong/11-2bboshong46.png",
          "/sequences/bboshong/11-2bboshong47.png",
          "/sequences/bboshong/11-2bboshong48.png",
        ]}
      />
      <PngSequencePlayer
        width={400}
        height={400}
        x={1390}
        y={2850}
        sequence={[
          "/sequences/kkeshong/11-2kkeshong00.png",
          "/sequences/kkeshong/11-2kkeshong01.png",
          "/sequences/kkeshong/11-2kkeshong02.png",
          "/sequences/kkeshong/11-2kkeshong03.png",
          "/sequences/kkeshong/11-2kkeshong04.png",
          "/sequences/kkeshong/11-2kkeshong05.png",
          "/sequences/kkeshong/11-2kkeshong06.png",
          "/sequences/kkeshong/11-2kkeshong07.png",
          "/sequences/kkeshong/11-2kkeshong08.png",
          "/sequences/kkeshong/11-2kkeshong09.png",
          "/sequences/kkeshong/11-2kkeshong10.png",
          "/sequences/kkeshong/11-2kkeshong11.png",
          "/sequences/kkeshong/11-2kkeshong12.png",
          "/sequences/kkeshong/11-2kkeshong13.png",
          "/sequences/kkeshong/11-2kkeshong14.png",
          "/sequences/kkeshong/11-2kkeshong15.png",
          "/sequences/kkeshong/11-2kkeshong16.png",
          "/sequences/kkeshong/11-2kkeshong17.png",
          "/sequences/kkeshong/11-2kkeshong18.png",
          "/sequences/kkeshong/11-2kkeshong19.png",
          "/sequences/kkeshong/11-2kkeshong20.png",
          "/sequences/kkeshong/11-2kkeshong21.png",
          "/sequences/kkeshong/11-2kkeshong22.png",
          "/sequences/kkeshong/11-2kkeshong23.png",
          "/sequences/kkeshong/11-2kkeshong24.png",
          "/sequences/kkeshong/11-2kkeshong25.png",
          "/sequences/kkeshong/11-2kkeshong26.png",
          "/sequences/kkeshong/11-2kkeshong27.png",
          "/sequences/kkeshong/11-2kkeshong28.png",
          "/sequences/kkeshong/11-2kkeshong29.png",
          "/sequences/kkeshong/11-2kkeshong30.png",
          "/sequences/kkeshong/11-2kkeshong31.png",
          "/sequences/kkeshong/11-2kkeshong32.png",
          "/sequences/kkeshong/11-2kkeshong33.png",
          "/sequences/kkeshong/11-2kkeshong34.png",
          "/sequences/kkeshong/11-2kkeshong35.png",
          "/sequences/kkeshong/11-2kkeshong36.png",
          "/sequences/kkeshong/11-2kkeshong37.png",
          "/sequences/kkeshong/11-2kkeshong38.png",
          "/sequences/kkeshong/11-2kkeshong39.png",
          "/sequences/kkeshong/11-2kkeshong40.png",
          "/sequences/kkeshong/11-2kkeshong41.png",
          "/sequences/kkeshong/11-2kkeshong42.png",
          "/sequences/kkeshong/11-2kkeshong43.png",
          "/sequences/kkeshong/11-2kkeshong44.png",
          "/sequences/kkeshong/11-2kkeshong45.png",
          "/sequences/kkeshong/11-2kkeshong46.png",
          "/sequences/kkeshong/11-2kkeshong47.png",
          "/sequences/kkeshong/11-2kkeshong48.png",
          "/sequences/kkeshong/11-2kkeshong49.png",
          "/sequences/kkeshong/11-2kkeshong50.png",
          "/sequences/kkeshong/11-2kkeshong51.png",
          "/sequences/kkeshong/11-2kkeshong52.png",
          "/sequences/kkeshong/11-2kkeshong53.png",
          "/sequences/kkeshong/11-2kkeshong54.png",
          "/sequences/kkeshong/11-2kkeshong55.png",
          "/sequences/kkeshong/11-2kkeshong56.png",
          "/sequences/kkeshong/11-2kkeshong57.png",
        ]}
      />
      <PngSequencePlayer
        width={300}
        height={240}
        x={177}
        y={3004}
        sequence={[
          "/sequences/haeinkyung/12haeinkyung00.png",
          "/sequences/haeinkyung/12haeinkyung01.png",
          "/sequences/haeinkyung/12haeinkyung02.png",
          "/sequences/haeinkyung/12haeinkyung03.png",
          "/sequences/haeinkyung/12haeinkyung04.png",
          "/sequences/haeinkyung/12haeinkyung05.png",
          "/sequences/haeinkyung/12haeinkyung06.png",
          "/sequences/haeinkyung/12haeinkyung07.png",
          "/sequences/haeinkyung/12haeinkyung08.png",
          "/sequences/haeinkyung/12haeinkyung09.png",
          "/sequences/haeinkyung/12haeinkyung10.png",
          "/sequences/haeinkyung/12haeinkyung11.png",
          "/sequences/haeinkyung/12haeinkyung12.png",
          "/sequences/haeinkyung/12haeinkyung13.png",
          "/sequences/haeinkyung/12haeinkyung14.png",
          "/sequences/haeinkyung/12haeinkyung15.png",
          "/sequences/haeinkyung/12haeinkyung16.png",
          "/sequences/haeinkyung/12haeinkyung17.png",
          "/sequences/haeinkyung/12haeinkyung18.png",
          "/sequences/haeinkyung/12haeinkyung19.png",
          "/sequences/haeinkyung/12haeinkyung20.png",
          "/sequences/haeinkyung/12haeinkyung21.png",
          "/sequences/haeinkyung/12haeinkyung22.png",
          "/sequences/haeinkyung/12haeinkyung23.png",
          "/sequences/haeinkyung/12haeinkyung24.png",
          "/sequences/haeinkyung/12haeinkyung25.png",
          "/sequences/haeinkyung/12haeinkyung26.png",
          "/sequences/haeinkyung/12haeinkyung27.png",
          "/sequences/haeinkyung/12haeinkyung28.png",
          "/sequences/haeinkyung/12haeinkyung29.png",
          "/sequences/haeinkyung/12haeinkyung30.png",
          "/sequences/haeinkyung/12haeinkyung31.png",
          "/sequences/haeinkyung/12haeinkyung32.png",
          "/sequences/haeinkyung/12haeinkyung33.png",
          "/sequences/haeinkyung/12haeinkyung34.png",
          "/sequences/haeinkyung/12haeinkyung35.png",
          "/sequences/haeinkyung/12haeinkyung36.png",
          "/sequences/haeinkyung/12haeinkyung37.png",
          "/sequences/haeinkyung/12haeinkyung38.png",
          "/sequences/haeinkyung/12haeinkyung39.png",
          "/sequences/haeinkyung/12haeinkyung40.png",
          "/sequences/haeinkyung/12haeinkyung41.png",
          "/sequences/haeinkyung/12haeinkyung42.png",
          "/sequences/haeinkyung/12haeinkyung43.png",
          "/sequences/haeinkyung/12haeinkyung44.png",
          "/sequences/haeinkyung/12haeinkyung45.png",
          "/sequences/haeinkyung/12haeinkyung46.png",
          "/sequences/haeinkyung/12haeinkyung47.png",
          "/sequences/haeinkyung/12haeinkyung48.png",
          "/sequences/haeinkyung/12haeinkyung49.png",
          "/sequences/haeinkyung/12haeinkyung50.png",
          "/sequences/haeinkyung/12haeinkyung51.png",
          "/sequences/haeinkyung/12haeinkyung52.png",
          "/sequences/haeinkyung/12haeinkyung53.png",
          "/sequences/haeinkyung/12haeinkyung54.png",
          "/sequences/haeinkyung/12haeinkyung55.png",
          "/sequences/haeinkyung/12haeinkyung56.png",
          "/sequences/haeinkyung/12haeinkyung57.png",
          "/sequences/haeinkyung/12haeinkyung58.png",
          "/sequences/haeinkyung/12haeinkyung59.png",
          "/sequences/haeinkyung/12haeinkyung60.png",
          "/sequences/haeinkyung/12haeinkyung61.png",
          "/sequences/haeinkyung/12haeinkyung62.png",
          "/sequences/haeinkyung/12haeinkyung63.png",
          "/sequences/haeinkyung/12haeinkyung64.png",
          "/sequences/haeinkyung/12haeinkyung65.png",
          "/sequences/haeinkyung/12haeinkyung66.png",
          "/sequences/haeinkyung/12haeinkyung67.png",
          "/sequences/haeinkyung/12haeinkyung68.png",
          "/sequences/haeinkyung/12haeinkyung69.png",
          "/sequences/haeinkyung/12haeinkyung70.png",
          "/sequences/haeinkyung/12haeinkyung71.png",
          "/sequences/haeinkyung/12haeinkyung72.png",
        ]}
      />
      <PngSequencePlayer
        width={900}
        height={610}
        x={700}
        y={100}
        anchor={[0, 0]}
        sequence={[
          "/sequences/zeakul/3-2zeakul00.png",
          "/sequences/zeakul/3-2zeakul01.png",
          "/sequences/zeakul/3-2zeakul02.png",
          "/sequences/zeakul/3-2zeakul03.png",
          "/sequences/zeakul/3-2zeakul04.png",
          "/sequences/zeakul/3-2zeakul05.png",
          "/sequences/zeakul/3-2zeakul06.png",
          "/sequences/zeakul/3-2zeakul07.png",
          "/sequences/zeakul/3-2zeakul08.png",
          "/sequences/zeakul/3-2zeakul09.png",
          "/sequences/zeakul/3-2zeakul10.png",
          "/sequences/zeakul/3-2zeakul11.png",
          "/sequences/zeakul/3-2zeakul12.png",
          "/sequences/zeakul/3-2zeakul13.png",
          "/sequences/zeakul/3-2zeakul14.png",
          "/sequences/zeakul/3-2zeakul15.png",
          "/sequences/zeakul/3-2zeakul16.png",
          "/sequences/zeakul/3-2zeakul17.png",
          "/sequences/zeakul/3-2zeakul18.png",
          "/sequences/zeakul/3-2zeakul19.png",
          "/sequences/zeakul/3-2zeakul20.png",
          "/sequences/zeakul/3-2zeakul21.png",
          "/sequences/zeakul/3-2zeakul22.png",
          "/sequences/zeakul/3-2zeakul23.png",
          "/sequences/zeakul/3-2zeakul24.png",
          "/sequences/zeakul/3-2zeakul25.png",
          "/sequences/zeakul/3-2zeakul26.png",
          "/sequences/zeakul/3-2zeakul27.png",
          "/sequences/zeakul/3-2zeakul28.png",
          "/sequences/zeakul/3-2zeakul29.png",
          "/sequences/zeakul/3-2zeakul30.png",
          "/sequences/zeakul/3-2zeakul31.png",
          "/sequences/zeakul/3-2zeakul32.png",
          "/sequences/zeakul/3-2zeakul33.png",
          "/sequences/zeakul/3-2zeakul34.png",
          "/sequences/zeakul/3-2zeakul35.png",
          "/sequences/zeakul/3-2zeakul36.png",
          "/sequences/zeakul/3-2zeakul37.png",
          "/sequences/zeakul/3-2zeakul38.png",
          "/sequences/zeakul/3-2zeakul39.png",
          "/sequences/zeakul/3-2zeakul40.png",
          "/sequences/zeakul/3-2zeakul41.png",
          "/sequences/zeakul/3-2zeakul42.png",
          "/sequences/zeakul/3-2zeakul43.png",
          "/sequences/zeakul/3-2zeakul44.png",
          "/sequences/zeakul/3-2zeakul45.png",
          "/sequences/zeakul/3-2zeakul46.png",
          "/sequences/zeakul/3-2zeakul47.png",
          "/sequences/zeakul/3-2zeakul48.png",
          "/sequences/zeakul/3-2zeakul49.png",
          "/sequences/zeakul/3-2zeakul50.png",
          "/sequences/zeakul/3-2zeakul51.png",
          "/sequences/zeakul/3-2zeakul52.png",
          "/sequences/zeakul/3-2zeakul53.png",
          "/sequences/zeakul/3-2zeakul54.png",
          "/sequences/zeakul/3-2zeakul55.png",
          "/sequences/zeakul/3-2zeakul56.png",
          "/sequences/zeakul/3-2zeakul57.png",
          "/sequences/zeakul/3-2zeakul58.png",
          "/sequences/zeakul/3-2zeakul59.png",
          "/sequences/zeakul/3-2zeakul60.png",
          "/sequences/zeakul/3-2zeakul61.png",
          "/sequences/zeakul/3-2zeakul62.png",
          "/sequences/zeakul/3-2zeakul63.png",
          "/sequences/zeakul/3-2zeakul64.png",
          "/sequences/zeakul/3-2zeakul65.png",
        ]}
      />

      <PngSequencePlayer
        width={700}
        height={325}
        x={0}
        y={250}
        anchor={[0, 0]}
        sequence={[
          "/sequences/market/3-2market00.png",
          "/sequences/market/3-2market01.png",
          "/sequences/market/3-2market02.png",
          "/sequences/market/3-2market03.png",
          "/sequences/market/3-2market04.png",
          "/sequences/market/3-2market05.png",
          "/sequences/market/3-2market06.png",
          "/sequences/market/3-2market07.png",
          "/sequences/market/3-2market08.png",
          "/sequences/market/3-2market09.png",
          "/sequences/market/3-2market10.png",
          "/sequences/market/3-2market11.png",
          "/sequences/market/3-2market12.png",
          "/sequences/market/3-2market13.png",
          "/sequences/market/3-2market14.png",
          "/sequences/market/3-2market15.png",
          "/sequences/market/3-2market16.png",
          "/sequences/market/3-2market17.png",
          "/sequences/market/3-2market18.png",
          "/sequences/market/3-2market19.png",
          "/sequences/market/3-2market20.png",
          "/sequences/market/3-2market21.png",
          "/sequences/market/3-2market22.png",
          "/sequences/market/3-2market23.png",
          "/sequences/market/3-2market24.png",
          "/sequences/market/3-2market25.png",
          "/sequences/market/3-2market26.png",
          "/sequences/market/3-2market27.png",
          "/sequences/market/3-2market28.png",
          "/sequences/market/3-2market29.png",
          "/sequences/market/3-2market30.png",
          "/sequences/market/3-2market31.png",
          "/sequences/market/3-2market32.png",
          "/sequences/market/3-2market33.png",
          "/sequences/market/3-2market34.png",
          "/sequences/market/3-2market35.png",
          "/sequences/market/3-2market36.png",
          "/sequences/market/3-2market37.png",
          "/sequences/market/3-2market38.png",
          "/sequences/market/3-2market39.png",
          "/sequences/market/3-2market40.png",
          "/sequences/market/3-2market41.png",
          "/sequences/market/3-2market42.png",
          "/sequences/market/3-2market43.png",
          "/sequences/market/3-2market44.png",
          "/sequences/market/3-2market45.png",
          "/sequences/market/3-2market46.png",
          "/sequences/market/3-2market47.png",
          "/sequences/market/3-2market48.png",
          "/sequences/market/3-2market49.png",
          "/sequences/market/3-2market50.png",
          "/sequences/market/3-2market51.png",
          "/sequences/market/3-2market52.png",
          "/sequences/market/3-2market53.png",
          "/sequences/market/3-2market54.png",
          "/sequences/market/3-2market55.png",
          "/sequences/market/3-2market56.png",
          "/sequences/market/3-2market57.png",
          "/sequences/market/3-2market58.png",
          "/sequences/market/3-2market59.png",
          "/sequences/market/3-2market60.png",
          "/sequences/market/3-2market61.png",
          "/sequences/market/3-2market62.png",
          "/sequences/market/3-2market63.png",
          "/sequences/market/3-2market64.png",
          "/sequences/market/3-2market65.png",
        ]}
      />

      <Sprite
        image={"/map-assets/fog.png"}
        width={850}
        height={947}
        anchor={[1, 0]}
        x={2100}
        y={760}
        zIndex={10}
        eventMode="none"
      />

      <PngSequencePlayer
        width={470}
        height={250}
        x={1050}
        y={1510}
        anchor={[0, 0]}
        zIndex={11}
        eventMode="none"
        sequence={[
          "/sequences/rainbow/rainbow00.png",
          "/sequences/rainbow/rainbow01.png",
          "/sequences/rainbow/rainbow02.png",
          "/sequences/rainbow/rainbow03.png",
          "/sequences/rainbow/rainbow04.png",
          "/sequences/rainbow/rainbow05.png",
          "/sequences/rainbow/rainbow06.png",
          "/sequences/rainbow/rainbow07.png",
          "/sequences/rainbow/rainbow08.png",
          "/sequences/rainbow/rainbow09.png",
          "/sequences/rainbow/rainbow10.png",
          "/sequences/rainbow/rainbow11.png",
          "/sequences/rainbow/rainbow12.png",
          "/sequences/rainbow/rainbow13.png",
          "/sequences/rainbow/rainbow14.png",
          "/sequences/rainbow/rainbow15.png",
          "/sequences/rainbow/rainbow16.png",
          "/sequences/rainbow/rainbow17.png",
          "/sequences/rainbow/rainbow18.png",
          "/sequences/rainbow/rainbow19.png",
          "/sequences/rainbow/rainbow20.png",
          "/sequences/rainbow/rainbow21.png",
          "/sequences/rainbow/rainbow22.png",
          "/sequences/rainbow/rainbow23.png",
          "/sequences/rainbow/rainbow24.png",
          "/sequences/rainbow/rainbow25.png",
          "/sequences/rainbow/rainbow26.png",
          "/sequences/rainbow/rainbow27.png",
          "/sequences/rainbow/rainbow28.png",
          "/sequences/rainbow/rainbow29.png",
          "/sequences/rainbow/rainbow30.png",
          "/sequences/rainbow/rainbow31.png",
          "/sequences/rainbow/rainbow32.png",
          "/sequences/rainbow/rainbow33.png",
          "/sequences/rainbow/rainbow34.png",
          "/sequences/rainbow/rainbow35.png",
          "/sequences/rainbow/rainbow36.png",
          "/sequences/rainbow/rainbow37.png",
          "/sequences/rainbow/rainbow38.png",
          "/sequences/rainbow/rainbow39.png",
          "/sequences/rainbow/rainbow40.png",
          "/sequences/rainbow/rainbow41.png",
          "/sequences/rainbow/rainbow42.png",
          "/sequences/rainbow/rainbow43.png",
          "/sequences/rainbow/rainbow44.png",
          "/sequences/rainbow/rainbow45.png",
          "/sequences/rainbow/rainbow46.png",
          "/sequences/rainbow/rainbow47.png",
          "/sequences/rainbow/rainbow48.png",
          "/sequences/rainbow/rainbow49.png",
          "/sequences/rainbow/rainbow50.png",
          "/sequences/rainbow/rainbow51.png",
          "/sequences/rainbow/rainbow52.png",
          "/sequences/rainbow/rainbow53.png",
          "/sequences/rainbow/rainbow54.png",
        ]}
      />

      <PngSequencePlayer
        width={672}
        height={378}
        x={1520}
        y={3490}
        sequence={[
          "/sequences/togri/13togri00.png",
          "/sequences/togri/13togri01.png",
          "/sequences/togri/13togri02.png",
          "/sequences/togri/13togri03.png",
          "/sequences/togri/13togri04.png",
          "/sequences/togri/13togri05.png",
          "/sequences/togri/13togri06.png",
          "/sequences/togri/13togri07.png",
          "/sequences/togri/13togri08.png",
          "/sequences/togri/13togri09.png",
          "/sequences/togri/13togri10.png",
          "/sequences/togri/13togri11.png",
          "/sequences/togri/13togri12.png",
          "/sequences/togri/13togri13.png",
          "/sequences/togri/13togri14.png",
          "/sequences/togri/13togri15.png",
          "/sequences/togri/13togri16.png",
          "/sequences/togri/13togri17.png",
          "/sequences/togri/13togri18.png",
          "/sequences/togri/13togri19.png",
          "/sequences/togri/13togri20.png",
          "/sequences/togri/13togri21.png",
          "/sequences/togri/13togri22.png",
          "/sequences/togri/13togri23.png",
        ]}
      />

      <PngSequencePlayer
        width={700}
        height={770}
        x={1130}
        y={4360}
        sequence={[
          "/sequences/bongdang/14bongdang00.png",
          "/sequences/bongdang/14bongdang01.png",
          "/sequences/bongdang/14bongdang02.png",
          "/sequences/bongdang/14bongdang03.png",
          "/sequences/bongdang/14bongdang04.png",
          "/sequences/bongdang/14bongdang05.png",
          "/sequences/bongdang/14bongdang06.png",
          "/sequences/bongdang/14bongdang07.png",
          "/sequences/bongdang/14bongdang08.png",
          "/sequences/bongdang/14bongdang09.png",
          "/sequences/bongdang/14bongdang10.png",
          "/sequences/bongdang/14bongdang11.png",
          "/sequences/bongdang/14bongdang12.png",
          "/sequences/bongdang/14bongdang13.png",
          "/sequences/bongdang/14bongdang14.png",
          "/sequences/bongdang/14bongdang15.png",
          "/sequences/bongdang/14bongdang16.png",
          "/sequences/bongdang/14bongdang17.png",
          "/sequences/bongdang/14bongdang18.png",
          "/sequences/bongdang/14bongdang19.png",
          "/sequences/bongdang/14bongdang20.png",
          "/sequences/bongdang/14bongdang21.png",
          "/sequences/bongdang/14bongdang22.png",
          "/sequences/bongdang/14bongdang23.png",
          "/sequences/bongdang/14bongdang24.png",
          "/sequences/bongdang/14bongdang25.png",
          "/sequences/bongdang/14bongdang26.png",
          "/sequences/bongdang/14bongdang27.png",
          "/sequences/bongdang/14bongdang28.png",
          "/sequences/bongdang/14bongdang29.png",
          "/sequences/bongdang/14bongdang30.png",
          "/sequences/bongdang/14bongdang31.png",
          "/sequences/bongdang/14bongdang32.png",
          "/sequences/bongdang/14bongdang33.png",
          "/sequences/bongdang/14bongdang34.png",
          "/sequences/bongdang/14bongdang35.png",
          "/sequences/bongdang/14bongdang36.png",
          "/sequences/bongdang/14bongdang37.png",
          "/sequences/bongdang/14bongdang38.png",
          "/sequences/bongdang/14bongdang39.png",
          "/sequences/bongdang/14bongdang40.png",
          "/sequences/bongdang/14bongdang41.png",
          "/sequences/bongdang/14bongdang42.png",
          "/sequences/bongdang/14bongdang43.png",
          "/sequences/bongdang/14bongdang44.png",
          "/sequences/bongdang/14bongdang45.png",
          "/sequences/bongdang/14bongdang46.png",
          "/sequences/bongdang/14bongdang47.png",
          "/sequences/bongdang/14bongdang48.png",
          "/sequences/bongdang/14bongdang49.png",
          "/sequences/bongdang/14bongdang50.png",
          "/sequences/bongdang/14bongdang51.png",
          "/sequences/bongdang/14bongdang52.png",
          "/sequences/bongdang/14bongdang53.png",
          "/sequences/bongdang/14bongdang54.png",
          "/sequences/bongdang/14bongdang55.png",
          "/sequences/bongdang/14bongdang56.png",
          "/sequences/bongdang/14bongdang57.png",
          "/sequences/bongdang/14bongdang58.png",
          "/sequences/bongdang/14bongdang59.png",
          "/sequences/bongdang/14bongdang60.png",
          "/sequences/bongdang/14bongdang61.png",
          "/sequences/bongdang/14bongdang62.png",
          "/sequences/bongdang/14bongdang63.png",
          "/sequences/bongdang/14bongdang64.png",
          "/sequences/bongdang/14bongdang65.png",
          "/sequences/bongdang/14bongdang66.png",
          "/sequences/bongdang/14bongdang67.png",
          "/sequences/bongdang/14bongdang68.png",
          "/sequences/bongdang/14bongdang69.png",
          "/sequences/bongdang/14bongdang70.png",
          "/sequences/bongdang/14bongdang71.png",
          "/sequences/bongdang/14bongdang72.png",
          "/sequences/bongdang/14bongdang73.png",
          "/sequences/bongdang/14bongdang74.png",
          "/sequences/bongdang/14bongdang75.png",
          "/sequences/bongdang/14bongdang76.png",
          "/sequences/bongdang/14bongdang77.png",
          "/sequences/bongdang/14bongdang78.png",
          "/sequences/bongdang/14bongdang79.png",
          "/sequences/bongdang/14bongdang80.png",
          "/sequences/bongdang/14bongdang81.png",
          "/sequences/bongdang/14bongdang82.png",
          "/sequences/bongdang/14bongdang83.png",
          "/sequences/bongdang/14bongdang84.png",
          "/sequences/bongdang/14bongdang85.png",
          "/sequences/bongdang/14bongdang86.png",
          "/sequences/bongdang/14bongdang87.png",
          "/sequences/bongdang/14bongdang88.png",
          "/sequences/bongdang/14bongdang89.png",
          "/sequences/bongdang/14bongdang90.png",
          "/sequences/bongdang/14bongdang91.png",
          "/sequences/bongdang/14bongdang92.png",
        ]}
      />
      <PngSequencePlayer
        width={450}
        height={450}
        x={1840}
        y={3926}
        sequence={[
          "/sequences/chunjiin/17chunjiin00.png",
          "/sequences/chunjiin/17chunjiin01.png",
          "/sequences/chunjiin/17chunjiin02.png",
          "/sequences/chunjiin/17chunjiin03.png",
          "/sequences/chunjiin/17chunjiin04.png",
          "/sequences/chunjiin/17chunjiin05.png",
          "/sequences/chunjiin/17chunjiin06.png",
          "/sequences/chunjiin/17chunjiin07.png",
          "/sequences/chunjiin/17chunjiin08.png",
          "/sequences/chunjiin/17chunjiin09.png",
          "/sequences/chunjiin/17chunjiin10.png",
          "/sequences/chunjiin/17chunjiin11.png",
          "/sequences/chunjiin/17chunjiin12.png",
          "/sequences/chunjiin/17chunjiin13.png",
          "/sequences/chunjiin/17chunjiin14.png",
          "/sequences/chunjiin/17chunjiin15.png",
          "/sequences/chunjiin/17chunjiin16.png",
          "/sequences/chunjiin/17chunjiin17.png",
          "/sequences/chunjiin/17chunjiin18.png",
          "/sequences/chunjiin/17chunjiin19.png",
          "/sequences/chunjiin/17chunjiin20.png",
          "/sequences/chunjiin/17chunjiin21.png",
          "/sequences/chunjiin/17chunjiin22.png",
          "/sequences/chunjiin/17chunjiin23.png",
          "/sequences/chunjiin/17chunjiin24.png",
          "/sequences/chunjiin/17chunjiin25.png",
          "/sequences/chunjiin/17chunjiin26.png",
          "/sequences/chunjiin/17chunjiin27.png",
          "/sequences/chunjiin/17chunjiin28.png",
          "/sequences/chunjiin/17chunjiin29.png",
          "/sequences/chunjiin/17chunjiin30.png",
          "/sequences/chunjiin/17chunjiin31.png",
          "/sequences/chunjiin/17chunjiin32.png",
          "/sequences/chunjiin/17chunjiin33.png",
          "/sequences/chunjiin/17chunjiin34.png",
          "/sequences/chunjiin/17chunjiin35.png",
          "/sequences/chunjiin/17chunjiin36.png",
          "/sequences/chunjiin/17chunjiin37.png",
          "/sequences/chunjiin/17chunjiin38.png",
          "/sequences/chunjiin/17chunjiin39.png",
          "/sequences/chunjiin/17chunjiin40.png",
          "/sequences/chunjiin/17chunjiin41.png",
          "/sequences/chunjiin/17chunjiin42.png",
          "/sequences/chunjiin/17chunjiin43.png",
          "/sequences/chunjiin/17chunjiin44.png",
          "/sequences/chunjiin/17chunjiin45.png",
          "/sequences/chunjiin/17chunjiin46.png",
          "/sequences/chunjiin/17chunjiin47.png",
          "/sequences/chunjiin/17chunjiin48.png",
          "/sequences/chunjiin/17chunjiin49.png",
          "/sequences/chunjiin/17chunjiin50.png",
          "/sequences/chunjiin/17chunjiin51.png",
          "/sequences/chunjiin/17chunjiin52.png",
          "/sequences/chunjiin/17chunjiin53.png",
          "/sequences/chunjiin/17chunjiin54.png",
          "/sequences/chunjiin/17chunjiin55.png",
          "/sequences/chunjiin/17chunjiin56.png",
          "/sequences/chunjiin/17chunjiin57.png",
          "/sequences/chunjiin/17chunjiin58.png",
          "/sequences/chunjiin/17chunjiin59.png",
          "/sequences/chunjiin/17chunjiin60.png",
          "/sequences/chunjiin/17chunjiin61.png",
          "/sequences/chunjiin/17chunjiin62.png",
          "/sequences/chunjiin/17chunjiin63.png",
          "/sequences/chunjiin/17chunjiin64.png",
          "/sequences/chunjiin/17chunjiin65.png",
          "/sequences/chunjiin/17chunjiin66.png",
          "/sequences/chunjiin/17chunjiin67.png",
          "/sequences/chunjiin/17chunjiin68.png",
          "/sequences/chunjiin/17chunjiin69.png",
          "/sequences/chunjiin/17chunjiin70.png",
          "/sequences/chunjiin/17chunjiin71.png",
          "/sequences/chunjiin/17chunjiin72.png",
          "/sequences/chunjiin/17chunjiin73.png",
          "/sequences/chunjiin/17chunjiin74.png",
          "/sequences/chunjiin/17chunjiin75.png",
          "/sequences/chunjiin/17chunjiin76.png",
          "/sequences/chunjiin/17chunjiin77.png",
          "/sequences/chunjiin/17chunjiin78.png",
          "/sequences/chunjiin/17chunjiin79.png",
          "/sequences/chunjiin/17chunjiin80.png",
          "/sequences/chunjiin/17chunjiin81.png",
          "/sequences/chunjiin/17chunjiin82.png",
        ]}
      />

      <PngSequencePlayer
        width={500 * 0.7}
        height={450 * 0.7}
        x={1870}
        y={4435}
        sequence={[
          "/sequences/bambam/18bambam00.png",
          "/sequences/bambam/18bambam01.png",
          "/sequences/bambam/18bambam02.png",
          "/sequences/bambam/18bambam03.png",
          "/sequences/bambam/18bambam04.png",
          "/sequences/bambam/18bambam05.png",
          "/sequences/bambam/18bambam06.png",
          "/sequences/bambam/18bambam07.png",
          "/sequences/bambam/18bambam08.png",
          "/sequences/bambam/18bambam09.png",
          "/sequences/bambam/18bambam10.png",
          "/sequences/bambam/18bambam11.png",
          "/sequences/bambam/18bambam12.png",
          "/sequences/bambam/18bambam13.png",
          "/sequences/bambam/18bambam14.png",
          "/sequences/bambam/18bambam15.png",
          "/sequences/bambam/18bambam16.png",
          "/sequences/bambam/18bambam17.png",
          "/sequences/bambam/18bambam18.png",
          "/sequences/bambam/18bambam19.png",
          "/sequences/bambam/18bambam20.png",
          "/sequences/bambam/18bambam21.png",
          "/sequences/bambam/18bambam22.png",
          "/sequences/bambam/18bambam23.png",
          "/sequences/bambam/18bambam24.png",
          "/sequences/bambam/18bambam25.png",
          "/sequences/bambam/18bambam26.png",
          "/sequences/bambam/18bambam27.png",
          "/sequences/bambam/18bambam28.png",
          "/sequences/bambam/18bambam29.png",
          "/sequences/bambam/18bambam30.png",
          "/sequences/bambam/18bambam31.png",
          "/sequences/bambam/18bambam32.png",
          "/sequences/bambam/18bambam33.png",
          "/sequences/bambam/18bambam34.png",
          "/sequences/bambam/18bambam35.png",
          "/sequences/bambam/18bambam36.png",
          "/sequences/bambam/18bambam37.png",
          "/sequences/bambam/18bambam38.png",
          "/sequences/bambam/18bambam39.png",
          "/sequences/bambam/18bambam40.png",
          "/sequences/bambam/18bambam41.png",
          "/sequences/bambam/18bambam42.png",
          "/sequences/bambam/18bambam43.png",
          "/sequences/bambam/18bambam44.png",
          "/sequences/bambam/18bambam45.png",
          "/sequences/bambam/18bambam46.png",
          "/sequences/bambam/18bambam47.png",
          "/sequences/bambam/18bambam48.png",
          "/sequences/bambam/18bambam49.png",
          "/sequences/bambam/18bambam50.png",
          "/sequences/bambam/18bambam51.png",
          "/sequences/bambam/18bambam52.png",
          "/sequences/bambam/18bambam53.png",
          "/sequences/bambam/18bambam54.png",
          "/sequences/bambam/18bambam55.png",
          "/sequences/bambam/18bambam56.png",
          "/sequences/bambam/18bambam57.png",
          "/sequences/bambam/18bambam58.png",
          "/sequences/bambam/18bambam59.png",
          "/sequences/bambam/18bambam60.png",
          "/sequences/bambam/18bambam61.png",
          "/sequences/bambam/18bambam62.png",
          "/sequences/bambam/18bambam63.png",
          "/sequences/bambam/18bambam64.png",
          "/sequences/bambam/18bambam65.png",
          "/sequences/bambam/18bambam66.png",
          "/sequences/bambam/18bambam67.png",
          "/sequences/bambam/18bambam68.png",
          "/sequences/bambam/18bambam69.png",
          "/sequences/bambam/18bambam70.png",
          "/sequences/bambam/18bambam71.png",
          "/sequences/bambam/18bambam72.png",
          "/sequences/bambam/18bambam73.png",
          "/sequences/bambam/18bambam74.png",
          "/sequences/bambam/18bambam75.png",
          "/sequences/bambam/18bambam76.png",
          "/sequences/bambam/18bambam77.png",
          "/sequences/bambam/18bambam78.png",
          "/sequences/bambam/18bambam79.png",
          "/sequences/bambam/18bambam80.png",
          "/sequences/bambam/18bambam81.png",
          "/sequences/bambam/18bambam82.png",
          "/sequences/bambam/18bambam83.png",
          "/sequences/bambam/18bambam84.png",
          "/sequences/bambam/18bambam85.png",
          "/sequences/bambam/18bambam86.png",
          "/sequences/bambam/18bambam87.png",
          "/sequences/bambam/18bambam88.png",
          "/sequences/bambam/18bambam89.png",
          "/sequences/bambam/18bambam90.png",
          "/sequences/bambam/18bambam91.png",
          "/sequences/bambam/18bambam92.png",
        ]}
      />
    </>
  );
};

export default MapAssets;

/*

1. 3-2zeakul , 3-2market  : 흰색 좁쌀달믄것들, 제아쿨이라 읽음ㅋ 그리고 가장 좌측에는 마켓

2. 지도_안개_resize.png, rainbow   : 우측에 안개랑 안개 밑에 무지개 피엔지 시퀀스. 근데 안개는 가장 상단 레이어로 허수깨비랑 도깨비보다 위에 있어야 할거 같은데.. 이거는 일단 패스하고 넘어가도 될듯

3. 13togri  : 어제한 깨숑 뽀숑 하단에 모래땅 위에 흰색 쫌쫌따리, 토그리라 읽음 ㅎㅎ

4. 14bongdang , 17chunjiin, 18bambam :   가운데 큰 땅 14봉당, 우측 상단 17천지인, 우측 하단 18밤밤, 왼쪽에 그림자달믄건 무시!
*/
