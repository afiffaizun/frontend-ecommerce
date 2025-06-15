import React from 'react';
import ArrowIcon from '../common/ArrowIcon';

const Card = ({ imagePath, title, description, actionArrow, height = '240px', width = '200px' }) => {
  return (
    <div className="flex flex-col p-4 shadow-md rounded-xl bg-white w-fit max-w-xs">
      <img
        src={imagePath}
        alt={title}
        style={{ height, width }}
        className="object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto"
      />
      <div className="flex justify-between items-start mt-4">
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{title}</p>
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
        {actionArrow && (
          <div className="ml-2 mt-1">
            <ArrowIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
