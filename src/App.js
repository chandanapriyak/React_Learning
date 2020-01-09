import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/RefsWithClass/FocusInput';
import FRParentInput from './components/Forwarding_Refs/FRParentInput';
import PortalDemo from './components/Portals/PortalDemo';
import Hero from './components/Error_Boundary/Hero';
import ErrorBoundary from './components/Error_Boundary/ErrorBoundary';
import ClickCounter from './components/HigherOrderComps1/ClickCounter';
import HoverComponent from './components/HigherOrderComps1/HoverComponent';

function App() {
  return (
    <div className="App">
      <HoverComponent></HoverComponent>
      <ClickCounter></ClickCounter>
      {/* <ErrorBoundary>
         <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
         <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
         <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp></ParentComp> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline></Inline> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
        {/* <EventBind></EventBind> */}
       {/* <FunctionClick></FunctionClick> */}
       {/* <ClassClick></ClassClick> */}
       {/* <Counter></Counter>  */}

       {/* <Greet name="chandana" lastname="priya"></Greet>
       <Greet name="roja"> <button>submit</button></Greet>
      <Greet name="ravi"/> */}

       {/* <Welcome name="chandana" lastname="priya"></Welcome>
       <Welcome name="roja" lastname="rani"></Welcome>   */}
      {/* <Hello/>  */}
      {/* <Message/> */}
      
    </div>
  );
}

export default App;
