import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ProgressBar = () => {
  const milestones = [
    { id: 1, name: 'Start', reached: true },
    { id: 2, name: 'Milestone 1', reached: true },
    { id: 3, name: 'Milestone 2', reached: false },
    { id: 4, name: 'Finish', reached: false },
  ];

  const [activeMilestone, setActiveMilestone] = useState(2); // Assuming the user is currently on the second milestone

  const calculateProgress = () => {
    const reachedMilestones = milestones.filter(milestone => milestone.reached).length;
    return (reachedMilestones / milestones.length) * 100;
  };

  return (
    <div className='w-full p-4 space-y-4'>
      <div className='w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700'>
        <div className='bg-blue-600 h-4 rounded-full' style={{ width: `${calculateProgress()}%` }}></div>
      </div>

      <div className='flex justify-between'>
        {milestones.map((milestone) => (
          <button
            key={milestone.id}
            className={`flex flex-col items-center text-sm ${activeMilestone >= milestone.id ? 'text-blue-600' : 'text-gray-400'}`}
            onClick={() => setActiveMilestone(milestone.id)}
          >
            {activeMilestone >= milestone.id ? <FiCheckCircle /> : <div className='w-4 h-4 bg-gray-200 rounded-full'></div>}
            <span>{milestone.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;