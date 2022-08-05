import './App.css';
import React from 'react';
import CustomTextInput from './components/Accessibility';
import ClassClick from './components/ClassClick';
import MyComponent from './components/CodeSplitting';
import SignUpDialog from './components/containment/SignUpDialog';
import WelcomeDialog from './components/containment/WelcomeDialog';
import Toolbar from './components/context/Toolbar';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Forms from './components/Forms';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Inline from './components/Inline';
import LifecycleA from './components/LifecycleA';
import Message from './components/Message';
import ParentComp from './components/pureComp/ParentComp';
import PersonList from './components/PersonList';
import Stylesheet from './components/Stylesheet';
import Calculator from './components/tempCalc/Calculator';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import MainToolbar from './components/context/Toolbar';
import Table from './components/fragments/Table';
import RefsDemo from './components/refs/RefsDemo';
import FoucsInput from './components/refs/FoucsInput';
import FRParentInput from './components/refs/FRParentInput';
import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/errorBoundary/Hero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import ClickCounter from './components/HigherOrderComponents/ClickCounter';
import HoverCounter from './components/HigherOrderComponents/HoverCounter';
import ClickCounterTwo from './components/renderProps/ClickCounterTwo';
import HoverCounterTwo from './components/renderProps/HoverCounterTwo';
import { UserProvider } from './components/context/UserContext';
import PostsList from './components/reactHttp/PostsList';
import ClassCounter from './components/hooks/ClassCounter';
import HooksCounter from './components/hooks/HooksCounter';
import HooksCounterTwo from './components/hooks/HooksCounterTwo';
import HooksThree from './components/hooks/HooksThree';
import HooksFour from './components/hooks/HooksFour';
import UseEffectHook from './components/hooks/UseEffectHook';
import ClassMouse from './components/hooks/ClassMouse';
import HookMouse from './components/hooks/HookMouse';
import MouseContainer from './components/hooks/MouseContainer';
import IntervalClassCounter from './components/hooks/IntervalClassCounter';
import HookIntervalCounter from './components/hooks/HookIntervalCounter';
import DataFetching from './components/hooks/DataFetching';
import CounterButton from './components/OptimizingPerformance/CounterButton';
import Parent from './components/portals/Parent';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';
import { useReducer } from 'react';
import ComponentA from './components/useReducer/ComponentA';
import ComponentB from './components/useReducer/ComponentB';
import ComponentC from './components/useReducer/ComponentC';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
import DataFetchingTwo from './components/useReducer/DataFetchingTwo';
import ParentComponent from './components/useCallback/ParentComponent';

export const UserContext = React.createContext();
export const LastNameContext = React.createContext();

export const CountContext = React.createContext();


const initialState = 0;

const reducer = (state,action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count,dispatch] = useReducer(reducer,initialState)


  return (
    <CountContext.Provider value={{
      countState: count,
      countDispatch: dispatch
    }}>
      
      <div className="App">
      {/* <Welcome name="Kribas" heroName="Carlous"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Greet name="Bruce Wayne" heroName="Batman"/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <Forms/> */}
      {/* <Calculator/> */}
      {/* <SignUpDialog/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <PersonList/> */}
      {/* <CustomTextInput/> */}
      {/* <MyComponent/> */}
      {/* <Stylesheet/>
      <Inline/> */}
      {/* <LifecycleA/> */}
      {/* <MainToolbar/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FoucsInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman"/>
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <ClickCounter name="Kribas"/>
      <HoverCounter/> */}
      {/* <CounterTwo render = {(count,incrementCounter) => <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>}/>
      <CounterTwo render= {(count,incrementCounter) => <HoverCounter count={count} incrementCounter={incrementCounter}/> }/> */}
      {/* <UserProvider value="Kribas">
        <ComponentC/>
      </UserProvider> */}
      {/* <PostsList/> */}
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HooksCounterTwo/> */}
      {/* <HooksThree/> */}
      {/* <HooksFour/> */}
      {/* <UseEffectHook/> */}
      {/* <ClassMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/>
      <HookIntervalCounter/> */}
      {/* <DataFetching/> */}
      {/* <CounterButton/> */}
      {/* <UserContext.Provider value="Kribas">
        <LastNameContext.Provider value="Rimal">
            <ComponentC/>
        </LastNameContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}

      {/* <DataFetchingOne/> */}

      {/* <DataFetchingTwo/> */}

      <ParentComponent/>
      
      
    </div>
    </CountContext.Provider>
    
  );
}

export default App;
