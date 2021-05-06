import React from 'react';


const MarkdownInput = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="MarkdownInput">
      <textarea className="input" value={props.value} onChange={handleChange}></textarea>
      <br></br>
      <br></br>
    </div>
  );
};

export default MarkdownInput;