import React from 'react';

// The expected type comes from property 'style' which is declared here on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'

export const Preview = () => {
  const configContext = {
    faceSize: 96,
    eyeSize: 1.0,
    mouseSize: 1.0,
    cheekSize: 1.0,
  };
  let uiFaceSize;

  // 顔
  // eslint-disable-next-line prefer-const
  uiFaceSize = configContext.faceSize;
  const uiFaceColor = '#FEE99E';

  const faceStyle = {
    width: `${uiFaceSize}px`,
    height: `${uiFaceSize}px`,
    borderRadius: '50%',
    background: `${uiFaceColor}`,
    position: 'relative',
    border: 'solid #333 3px',
  } as const;

  // 目
  const eyeSize = uiFaceSize * configContext.eyeSize * 0.25;
  const uiEyeToEyeDistancepercent = 40;

  const eyeDistanceFromOuter =
    (uiFaceSize - (uiFaceSize * uiEyeToEyeDistancepercent) / 100 - eyeSize) / 2;
  const eyeTopPercent = 45;
  const eyeTop = (uiFaceSize * eyeTopPercent) / 100 - eyeSize / 2;

  const eyeStyleLeft = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    background: '#222',
    borderRadius: '50%',
    position: 'absolute',
    top: `${eyeTop}px`,
    zIndex: '1',
    left: `${eyeDistanceFromOuter}px`,
  } as const;

  const eyeStyleRight = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    background: '#222',
    borderRadius: '50%',
    position: 'absolute',
    top: `${eyeTop}px`,
    right: `${eyeDistanceFromOuter}px`,
    zIndex: '1',
  } as const;

  // 白目
  //  woeu(white of eye upper): 上の白目
  //  woel(white of eye lower): 下の白目
  //  woe(white of eye): 白目（共通）

  const woeuWidth = eyeSize * 0.6;
  const woeuHeight = eyeSize * 0.45;
  const woeuTop = eyeTop + eyeSize * 0.1;
  const woeuDistanceFromOuter = eyeDistanceFromOuter + eyeSize * 0.1;

  const woeuStyleLeft = {
    top: `${woeuTop}px`,
    left: `${woeuDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woeuWidth}px`,
    height: `${woeuHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(-30deg)',
    zIndex: '2',
  } as const;

  const woeuStyleRight = {
    top: `${woeuTop}px`,
    right: `${woeuDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woeuWidth}px`,
    height: `${woeuHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(30deg)',
    zIndex: '2',
  } as const;

  const woelWidth = eyeSize * 0.3;
  const woelHeight = eyeSize * 0.2;
  const woelTop = eyeTop + eyeSize * 0.6;
  const woelDistanceFromOuter = eyeDistanceFromOuter + eyeSize * 0.5;

  const woelStyleLeft = {
    top: `${woelTop}px`,
    left: `${woelDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woelWidth}px`,
    height: `${woelHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(-30deg)',
    zIndex: '2',
  } as const;

  const woelStyleRight = {
    top: `${woelTop}px`,
    right: `${woelDistanceFromOuter}px`,
    background: '#eee',
    position: 'absolute',
    width: `${woelWidth}px`,
    height: `${woelHeight}px`,
    borderRadius: '50%',
    transform: 'rotate(30deg)',
    zIndex: '2',
  } as const;

  // 眉毛
  const eyeBlowTop = uiFaceSize * 0.18;
  const eyeBlowWidth = uiFaceSize * 0.15;
  const eyeBlowHeight = uiFaceSize * 0.15;
  const eyeBlowDistanceFromOuter = uiFaceSize * 0.12;

  const eyeBrowStyleLeft = {
    position: 'absolute',
    top: `${eyeBlowTop}px`,
    width: `${eyeBlowWidth}px`,
    height: `${eyeBlowHeight}px`,
    borderRadius: '50%',
    border: `${eyeBlowWidth * 0.48}px solid #744517`,
    left: `${eyeBlowDistanceFromOuter}px`,
    transform: 'rotate(60deg)',
  } as const;

  const eyeBrowStyleRight = {
    position: 'absolute',
    top: `${eyeBlowTop}px`,
    width: `${eyeBlowWidth}px`,
    height: `${eyeBlowHeight}px`,
    borderRadius: '50%',
    border: `${eyeBlowWidth * 0.48}px solid #744517`,
    right: `${eyeBlowDistanceFromOuter}px`,
    transform: 'rotate(-60deg)',
  } as const;

  // 眉毛っぽくするためのトリミング
  const eyeBlowAfterTop = uiFaceSize * 0.13;
  const eyeBlowAfterWidth = uiFaceSize * 0.14;
  const eyeBlowAfterHeight = uiFaceSize * 0.2;
  const eyeBlowAfterDistanceFromOuter = eyeBlowDistanceFromOuter * 0.9;

  const eyeBrowAfterStyleLeft = {
    position: 'absolute',
    top: `${eyeBlowAfterTop}px`,
    width: `${eyeBlowAfterWidth}px`,
    height: `${eyeBlowAfterHeight}px`,
    borderRadius: '50%',
    left: `${eyeBlowAfterDistanceFromOuter}px`,
    background: `${uiFaceColor}`,
    transform: 'rotate(60deg)',
  } as const;

  const eyeBrowAfterStyleRight = {
    position: 'absolute',
    top: `${eyeBlowAfterTop}px`,
    width: `${eyeBlowAfterWidth}px`,
    height: `${eyeBlowAfterHeight}px`,
    borderRadius: '50%',
    right: `${eyeBlowAfterDistanceFromOuter}px`,
    background: `${uiFaceColor}`,
    transform: 'rotate(-60deg)',
  } as const;

  // 口
  const mouseSize = uiFaceSize * configContext.mouseSize * 0.15;
  const mouseThickness = mouseSize * 0.25;
  const sin45 = 0.707;
  const mouseLeft = uiFaceSize / 2 - mouseSize / 2;
  const mouseBottom = uiFaceSize / 4 - mouseSize * sin45;

  const mouthStyle = {
    position: 'absolute',
    bottom: `${mouseBottom}px`,
    width: `${mouseSize}px`,
    height: `${mouseSize}px`,
    borderTop: `${mouseThickness}px solid #ef0853`,
    borderRight: `${mouseThickness}px solid #ef0853`,
    left: `${mouseLeft}px`,
    transform: 'rotate(-45deg)',
  } as const;

  // ほっぺ
  const cheekSize = uiFaceSize * configContext.cheekSize * 0.15;
  const cheekBackgroundColor = '#e2a1a1';
  const cheekTop = uiFaceSize * 0.5;
  const cheekDistanceFromOuter = uiFaceSize * 0.12;
  const cheekShadow = cheekSize * 0.3;

  const cheekStyleLeft = {
    width: `${cheekSize}px`,
    height: `${cheekSize}px`,
    background: `${cheekBackgroundColor}`,
    position: 'absolute',
    top: `${cheekTop}px`,
    boxShadow: `${cheekBackgroundColor} 0px 0px ${cheekShadow}px ${cheekShadow}px`,
    borderRadius: '50%',
    left: `${cheekDistanceFromOuter}px`,
  } as const;

  const cheekStyleRight = {
    width: `${cheekSize}px`,
    height: `${cheekSize}px`,
    background: `${cheekBackgroundColor}`,
    position: 'absolute',
    top: `${cheekTop}px`,
    boxShadow: `${cheekBackgroundColor} 0px 0px ${cheekShadow}px ${cheekShadow}px`,
    borderRadius: '50%',
    right: `${cheekDistanceFromOuter}px`,
  } as const;

  return (
    <div className='preview'>
      <div style={faceStyle}>
        <div style={eyeBrowStyleLeft}></div>
        <div style={eyeBrowStyleRight}></div>
        <div style={eyeBrowAfterStyleLeft}></div>
        <div style={eyeBrowAfterStyleRight}></div>
        <div style={eyeStyleLeft}></div>
        <div style={eyeStyleRight}></div>
        <div style={woeuStyleLeft}></div>
        <div style={woeuStyleRight}></div>
        <div style={woelStyleLeft}></div>
        <div style={woelStyleRight}></div>
        <div style={cheekStyleLeft}></div>
        <div style={cheekStyleRight}></div>
        <div style={mouthStyle}></div>
      </div>
    </div>
  );
};
