import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'
import Home from "./pages/Home"
// import About from "./pages/About"
import Dashboards from "./pages/Dashboards"
import NewsArtice from "./pages/NewsArtice"




const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/news" element={<NewsArtice />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App