import React, { useState } from 'react';
import HackerNewsList from '../components/HackerNewsList';
import SearchBar from '../components/SearchBar';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Hacker News Top Stories</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <HackerNewsList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Index;