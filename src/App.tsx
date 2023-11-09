import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'react-bootstrap';
import ArticleSpace from './components/ArticleSpace';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/MyNav';
import DetailArticle from './components/DetailArticle';

const App = () =>{
  return (
    <BrowserRouter>
    <MyNav/>
   <Container>   
    <Routes>
      <Route path='/' element={ <ArticleSpace/>}/>
      <Route path='/:detailId' element={<DetailArticle />}/>
    </Routes>
   </Container>
   </BrowserRouter>
  );
}

export default App;
