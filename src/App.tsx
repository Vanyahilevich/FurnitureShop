import { useState } from 'react'
import {Link} from "react-router-dom";
import Select from "./components/Select";
import Option from "./components/Option";

import './index.css';
import Link from "./components/Link";

function App() {
  const [count, setCount] = useState(0)
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event ) => {
        setSelectedValue(event.target.value);
    };
  return (
    <div className='font-mainFont'>
        <Link>main</Link>
        <Link>products</Link>
        <Link>contact</Link>
        <Link>about</Link>


      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
          <Select value={selectedValue} onChange={handleSelectChange}>
              <Option value={10} label={"10"}/>
              <Option value={20} label={"20"}/>
          </Select>
          <div className="text-red-500 p-4 m-6">
              Это компонент с использованием Tailwind CSS!
          </div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
