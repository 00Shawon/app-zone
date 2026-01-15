
import React from 'react';
import SkeletonCard from './components/Card/SkeletonCard';

const loading = () => {
    return (
        <div className='w-full grid gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'>
            {
                [...Array(20)].map((_,index)=> <SkeletonCard key={index}></SkeletonCard>)
            }
        </div>
    );
};

export default loading;