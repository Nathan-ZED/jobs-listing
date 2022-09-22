import React, {createContext, useState} from 'react';
import './App.css';
import TopBar from "./components/TopBar/TopBar";
import CardList from "./components/CardList/CardList";
import FilterBar from "./components/FilterBar/FilterBar";
import {FilterContext} from "./context/FilterContext";

function App() {

    const [filters, setFilters] = useState<any>([])

    const newFilter = (f:any) => {
        const addFilter = [f, ...filters]
        const filteredArray = addFilter.filter(function(ele , pos){
            return addFilter.indexOf(ele) === pos;
        })
        //TODO: Filtrer les resultat dans la liste
        setFilters(filteredArray)
    }

    const removeFilter = (name:string) => {
        const _filters:any = [...filters]
        _filters.forEach((filter:any) => {
            if(filter === name) {
                const index = _filters.indexOf(filter);
                _filters.splice(index, 1);
            }
            setFilters(_filters)
        })
    }

  return (
      <FilterContext.Provider value={{
          filters: filters,
          newFilter: newFilter,
          removeFilter: removeFilter,
      }}>
        <main className="App">
          <TopBar/>
            {filters.length > 0 ? <FilterBar filter={filters} /> : null}
                <CardList filters={filters} />
        </main>
      </FilterContext.Provider>
  );
}

export default App;
