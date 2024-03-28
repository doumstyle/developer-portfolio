"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
    width: '95%',
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;