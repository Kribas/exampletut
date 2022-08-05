import React, { Suspense, useState } from "react";

const OtherComponent = React.lazy(() => import("./Accessibility"));
const PersonList = React.lazy(() => import("./Example"));
const EmailList = React.lazy(() => import('./Email'))

export default function MyComponent() {

    const [tab,setTab] = useState('Persons')

    function handleSelectTab() {
        setTab(tab)
    }

  return (
    <div>
      
    </div>
  );
}
