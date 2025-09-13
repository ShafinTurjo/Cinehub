import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dummyShowsData, dummyDateTimeData } from '../assets/assets';

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const movie = dummyShowsData.find((s) => String(s._id) === String(id));
    setShow(movie || null);
  }, [id]);

  if (!show) return <div>Loading...</div>;

  // Use dummy times if no actual showtimes exist for this movie
  const movieShowTimes = Object.entries(dummyDateTimeData).map(([date, shows]) => ({
    date,
    times: shows
      .filter((s) => String(s.showId) === String(show._id))
      .map((s) => new Date(s.time)),
  })).filter((s) => s.times.length > 0);

  // If no shows exist, create dummy times for demonstration
  const finalShowTimes = movieShowTimes.length > 0 ? movieShowTimes : [
    { date: '2025-08-22', times: [new Date('2025-08-22T10:00'), new Date('2025-08-22T14:00')] },
    { date: '2025-08-23', times: [new Date('2025-08-23T12:00'), new Date('2025-08-23T16:00')] }
  ];

  return (
    <div className='px-6 md:px-16 lg:px-40 pt-10 md:pt-20 text-white'>
      <h1 className='text-3xl font-bold mb-4'>{show.title}</h1>
      <p className='italic mb-4'>{show.tagline}</p>
      <img src={show.poster_path} alt={show.title} className='w-64 md:w-96 mb-4 rounded-lg' />

      <p className='mb-4'>{show.overview}</p>
      <p><strong>Genres:</strong> {show.genres.map(g => g.name).join(', ')}</p>
      <p><strong>Release Date:</strong> {show.release_date}</p>
      <p><strong>Runtime:</strong> {show.runtime} min</p>
      <p><strong>Rating:</strong> {show.vote_average} ({show.vote_count} votes)</p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>Show Times</h2>
      {finalShowTimes.map((s) => (
        <div key={s.date} className='mb-2'>
          <p className='font-medium'>{s.date}</p>
          <div className='flex gap-4 flex-wrap'>
            {s.times.map((t, index) => (
              <span key={index} className='bg-gray-700 px-3 py-1 rounded'>
                {t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;