import React from 'react';

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };
  return (
    <>
      <div
        className={`p-2 rounded-lg drop-shadow-md hover:bg-[#59E391] cursor-pointer`}
        style={styles}
        onClick={props.isHeldHandler}
      >
        <h2 className="text-xl font-bold ">{props.value}</h2>
      </div>
    </>
  );
}
