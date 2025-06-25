import { Navigate, Route, Routes, } from "react-router"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {
  return (
    <>
        <h1>MainPage</h1>
        <hr />
        <Routes>
            <Route  path="/" element={ <HomePage/> } />
            <Route  path="login" element={ <LoginPage/> } />
            <Route  path="about" element={ <AboutPage/> } />

            {/* <Route path="/*" element={ <LoginPage/> } /> */}
            <Route path="/*" element={ <Navigate to="/about"/> } /> 
        </Routes>
    </>
  )
}
