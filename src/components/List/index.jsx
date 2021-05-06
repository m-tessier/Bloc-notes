import React from 'react';
import Button from 'components/Button';

const List = () => {
  console.log(localStorage);

  let notes = [];
  for (let i = 0; i < localStorage.length; i++) {
    notes.push(JSON.parse(localStorage.getItem(i)))
  };
  console.log(notes)

  const change = (event) => {
    const index = event.target.parentElement.parentElement.id;
    const note = notes[index];
    console.log(note.title);
    console.log(note.description);
  };

  return (
    <div className="List">
      {notes.map((item, index) => (
        <div id={`${index}`} className="card" key={`${index}`}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Button eventFunction={change} text="Voir plus" type="button" />
        </div>
      ))}
    </div>
  );
};

export default List;