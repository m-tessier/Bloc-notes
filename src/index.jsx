import React from 'react';
import ReactDom from 'react-dom';
import 'sass/styles.scss';

import List from 'components/List';
import MarkdownInput from 'components/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay';
import Button from 'components/Button';


const App = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");


  const handleChangeTitle = (newValue) => {
    setTitle(newValue);
  }
  const handleChangeDescription= (newValue) => {
    setDescription(newValue);
  }


  const handleSave = () => {
    const index = localStorage.length;
    const note = { title, description };

    localStorage.setItem(index, JSON.stringify(note));
  };


  const add = () => {
    if (document.getElementsByClassName('hidden')) {
      document.getElementById('right').classList.remove('hidden');
    }
  }

  
  return (
    <div className="App">
      <h1>Bloc-notes</h1>
      <div className="d-flex">
        <div className="w-30">
          <Button eventFunction={add} text="Ajouter une note" type="button" />
          <List />
        </div>
        <div id="right" className="w-70 hidden">
          <NoteDisplay title={title} description={description}/>
          <MarkdownInput value={title} onChange={handleChangeTitle} />
          <MarkdownInput value={description} onChange={handleChangeDescription} />
          <Button eventFunction={handleSave} text="Sauvegarder" type="submit" />
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));