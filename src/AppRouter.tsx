
import { Routes,Route } from 'react-router'
import { Home } from './pages/Home'
import { Delta } from './pages/Delta'
import { Municipio } from './pages/Municipio'
import { Parroquia } from './pages/Parroquia'
import { Header } from './components/Header'

export const AppRouter = () => {
  return (
    <>
         <Header />  
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="delta" element={<Delta />} />
            <Route path="municipio" element={<Municipio />} />
            <Route path="parroquia" element={<Parroquia />} />
        </Routes>
    </>
  )
}
