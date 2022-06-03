import { useState } from "react";
import Inputs from "./components/Inputs";
import SearchBar from "./components/Search";
import "./index.css";

function App() {
  // Dummy data
  const inputs = [
    {
      id: 1,
      name: "This is the first post about motorcycles",
      content: "This is the a great content about motorbikes.",
    },
    {
      id: 2,
      name: "This is the second post about dog business",
      content: "This is the a another content about dogs.",
    },
    {
      id: 3,
      name: "This is another post about cat behaviour",
      content: "This is the a superb content about cats.",
    },
    {
      id: 4,
      name: "This is the fourth post about best summer trips",
      content: "This is the an amazing content about trips.",
    },
  ];

  // Takes the input from URL / 'search'
  const { search } = window.location;
  const query = new URLSearchParams(search).get("search");

  // Create array with search query
  const filterInputs = (inputs, query) => {
    if (!query) {
      return inputs;
    }
    return inputs.filter((input) => {
      const inputName = input.name.toLowerCase();
      const inputContent = input.content.toLowerCase();
      return (
        inputName.includes(query.toLowerCase()) ||
        inputContent.includes(query.toLowerCase())
      );
    });
  };

  // Search as you type
  const [searchQuery, setSearchQuery] = useState(query || "");

  // Search filtered inputs
  const filteredInputs = filterInputs(inputs, searchQuery);

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Inputs filteredInputs={filteredInputs} />
    </div>
  );
}

export default App;
