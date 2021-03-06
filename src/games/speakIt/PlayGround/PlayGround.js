/* eslint react/prop-types: 0 */

import React from 'react';

const myStyle = {
  textAlign: 'center',
  width: '100%',
  height: 300,
  margin: '40px 0',
};
const image = {
  maxHeight: 260,
};
const translate = {
  position: 'relative',
  width: 390,
  margin: '0 auto',
  marginTop: 20,
  fontSize: 23,
  height: 36,
  color: 'rgb(229,180,225)',
};
const microphone = {
  width: 25,
  position: 'absolute',
  left: 0,
  bottom: 3,
};
const speechRecognition = {
  borderBottom: '1px solid white',
};

const PlayGround = ({ url, translation, transcript, listening }) => {
  const finalSentence = transcript.toString().split(' ');
  const result = finalSentence[Array.from(finalSentence).length - 1];

  return (
    <div style={myStyle}>
      <img alt="" style={image} src={url} />
      {listening ? (
        <p style={{ ...translate, ...speechRecognition }}>
          <img
            alt=""
            style={microphone}
            src="https://image.flaticon.com/icons/svg/3142/3142073.svg"
          />
          {result}
        </p>
      ) : (
        <p style={translate}>{translation}</p>
      )}
    </div>
  );
};

export default PlayGround;
