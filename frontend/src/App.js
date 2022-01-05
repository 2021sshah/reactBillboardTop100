// Import libraries for React Web App
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  // initalize data array and update method using useState
  const [data, setData] = React.useState([]);

  //perform get request using axios library to local machine
  const baseURL = "http://localhost:8081/random";
  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setData(response.data.data);
      })
      .catch(error => {
        return;
      });
  }, []);

  // function to update the order of the drag-and-drop list
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    // checks if list items in correct order
    var ranked = true;
    for(let i=0; i<items.length-1; i++) {
      if(items[i][1] > items[i+1][1]) {
        ranked = false;
      }
    }
    // turn list elements green if in correct order
    if(ranked) {
      document.getElementById("toRank").classList.add("correct");
    }
    else {
      document.getElementById("toRank").classList.remove("correct");
    }
    console.log(items);
    // update data array to prevent display from reverting
    setData(items);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Songs from the Top 100!</h1>
        <h4>Rank from MOST to LEAST Popular -- Courtesy of Siddharth Shah</h4>
        
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="songs">
            {(provided) => (
              <ul id="toRank" className="songs" {...provided.droppableProps} ref={provided.innerRef}>
                {data.map(([id, rank, title, artist], index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            Song Title: {title}<br/>
                            Artist: {artist}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        
        <a
          className="App-link"
          href="https://www.billboard.com/charts/hot-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Billboard Website
        </a>
      </header>
    </div>
  );
}

export default App;