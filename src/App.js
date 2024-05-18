import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavbarMain from './components/NavbarMain'
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

const EvapotranspirationPage = lazy(() => import('./pages/EvapotranspirationPage'));
const PrecipitationPage = lazy(() => import('./pages/PrecipitationPage'));
const BiomassPage = lazy(() => import('./pages/BiomassPage'));
const LandClassificationPage = lazy(() => import('./pages/LandClassificationPage'));
const WaterFootprintPage = lazy(() => import('./pages/WaterFootprintPage'));
const OtherDataPage = lazy(() => import('./pages/OtherDataPage'));
const ClimateChangePage = lazy(() => import('./pages/ClimateChangePage'));
const DataManualPage = lazy(() => import('./pages/DataManualPage'));
const WaterProductivity = lazy(() => import('./pages/WaterProductivity'));
const DroughtConditions = lazy(() => import('./pages/DroughtConditions'));
const VirtualWaterPage = lazy(() => import('./pages/VirtualWaterPage'));
const BenchmarkPage = lazy(() => import('./pages/BenchmarkPage'));
const DataDownloadPage = lazy(() => import('./pages/DataDownloadPage'));




const App = () => {
  
  return (
    <>
      <Router>
        <NavbarMain/>
        <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/evapotranspiration' element={<EvapotranspirationPage/>} />
          <Route path='/precipitation' element={<PrecipitationPage/>} />
          <Route path='/biomass' element={<BiomassPage/>} />
          <Route path='/benchmark' element={<BenchmarkPage/>} />
          <Route path='/climate' element={<ClimateChangePage/>} />
          <Route path='/land-classification' element={<LandClassificationPage/>} />
          <Route path='/water-footprint' element={<WaterFootprintPage/>} />
          <Route path='/water-productivity' element={<WaterProductivity/>} />
          <Route path='/drought-conditions' element={<DroughtConditions/>} />
          <Route path='/data-manual' element={<DataManualPage/>} />
          <Route path='/other-data' element={<OtherDataPage/>} />
          <Route path='/virtual-water' element={<VirtualWaterPage/>} />
          <Route path='/download' element={<DataDownloadPage/>} />
        </Routes>
        </Suspense>
        <ScrollToTop/>
        <Footer/>
      </Router>

    </>

  )
}

export default App