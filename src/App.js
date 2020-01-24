import React from 'react';
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';
import ClassMouse from './components/useEffect/ClassMouse';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetching from './components/useEffect/DataFetching';
import ComponentC from './components/Context/ComponentC';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
const UserProvider = UserContext.Provider

function App() {
  return (
    <div className="App">
      <UserProvider value={"chandana"}>
        <ChannelContext.Provider value={'codevolution'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserProvider>
      {/* <DataFetching/> */}
      {/* <IntervalHookCounter/> */}
      {/* <IntervalClassCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
