import React from 'react'
type InputProp={
    handleOnChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

function Input({handleOnChange}:InputProp) {
  return (
    <>
    <input type="text" name="" id=""  onChange={handleOnChange} />
    </>
  )
}

export default Input

// import React from 'react';

// type InputProp = {
//   handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// function Input({ handleOnChange }: InputProp) {
//   return (
//     <input
//       type="text"
//       onChange={handleOnChange}
//     />
//   );
// }

// export default Input;
