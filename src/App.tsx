import * as React from 'react';
import Sample from './Sample';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <>
      <div className='p-5'>
        <h2>React 19 Vite Starter</h2>
        <hr />
        <Sample />
      </div>
    </>
  );
};

export default App;
