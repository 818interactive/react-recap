import React from 'react';

export default ({messenger, setMessage})=> {
  const onInputChange=(e)=> {
    e.preventDefault();
    setMessage(e.target.value);
  }
  return(
    <div>
      {messenger.message}
      <br/>
      <input onChange={onInputChange}/>
    </div>
  )
}
