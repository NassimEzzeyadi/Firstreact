import './App.css'

import posts from './data/posts'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoPage from './components/NoPage'
import Blog from './components/Blog'
import Layout from  './components/Layout'
import Home from './components/Home'
import Form from './components/Form'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog posts={posts}/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="form" element={<Form/>}/>
        </Route>
      </Routes>
    </BrowserRouter>)
//   return (
//     <div className="App">
// <h1>Hey bro !</h1>
// <Blog posts={posts}/>
//     </div>
//   
}
 
export default App
