import React from 'react';
import ShowCard from './ShowCard';

import { FlexGrid } from '../styled';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { useShows } from '../../misc/custom-hook';

const ShowGrid = ({ data }) => {
  const [starred, dispatchStarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);
        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', show: show.id });
          } else {
            dispatchStarred({ type: 'ADD', show: show.id });
          }
        };
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
