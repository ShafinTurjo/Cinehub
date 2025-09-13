import React from 'react';

const BlurCircle = ({top="auto", left="auto",right="auto",buttom="auto"}) => {
  return (
    <div className="absolute z-50 h-56 w-56 rounded-full bg-primary/30 blur-3xl animate-pulse" style={{top:top,left:left,right:right,buttom:buttom}}>
      
    </div>
  );
};

export default BlurCircle;