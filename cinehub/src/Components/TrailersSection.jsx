import React,{ useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';

const TrailersSection = () => {
    const [currentTrailer, setCurrentTrailer ] = useState(dummyTrailers && dummyTrailers.length > 0 ? dummyTrailers[0] : null);
   console.log(currentTrailer?.videoUrl);

  return (
    <div className='relative px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg '> 
        Trailers
        </p>
        <div className='relative mt-6'>
            <BlurCircle top='-100px' right = '-100px'/>
             <BlurCircle top="-120px" left="-90px" />
             {currentTrailer ? (
            <ReactPlayer url={currentTrailer.videoUrl}
             controls={true} playing={true} muted={true}
            className="mx-auto max-w-full " width="750px" height="500px"/>
            ) : (
          <p className="text-center text-red-500">No trailer available</p>
        )}
        </div>
    </div>
  );
};

export default TrailersSection;
