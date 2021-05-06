import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = (props) => {
  const converter = new Showdown.Converter();
  const markdownValue = converter.makeHtml(props.description);

  const createMarkup = () => {
    return {__html: markdownValue};
  }

  return (
    <div className="NoteDisplay">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default NoteDisplay;