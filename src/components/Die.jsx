import React from 'react';

export default function Die(props) {
  return (
    <div className="p-2 rounded-lg bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] ">
      <h2 className="text-xl font-bold ">{props.value}</h2>
    </div>
  );
}
