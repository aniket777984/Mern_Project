import React from 'react';

const TravelCard = ({place}) => {
  return (
    <div  className='story'>
        <img src={place.images[0].url} alt="Aniket" />
        <p>{place.message}</p>
    </div>
  )
}

export default TravelCard