import React from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import SkeletonLoader from './SkeletonLoader';
import { fetchTopStories } from '../lib/api';

const HackerNewsList = ({ searchQuery }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories', searchQuery],
    queryFn: () => fetchTopStories(searchQuery),
  });

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <div>Error loading stories</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {data.hits.map((story) => (
        <StoryCard key={story.objectID} story={story} />
      ))}
    </div>
  );
};

export default HackerNewsList;