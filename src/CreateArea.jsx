import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpand, setExpand] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick() {
    setExpand(preValue => {
      return !preValue;
    })
    
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick ={handleClick}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete = "off"
        />
        
         {(isExpand)? <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          autoComplete = "off"
        /> : null}
        <Zoom in = {isExpand}>
        <Fab onClick={submitNote} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
