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
        //TODO: supprimer doublons
        //TODO: Filtrer les resultat dans la liste
        setFilters(addFilter)
    }

    const removeFilter = (name:string) => {
        const _filters:any = [...filters]
        _filters.forEach((filter:any) => {
            if(filter === name) {
                console.log(name)
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
                <CardList />
        </main>
      </FilterContext.Provider>
  );
}

export default App;
