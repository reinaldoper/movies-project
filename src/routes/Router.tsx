import InitialApp from '../page/InitialApp'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialApp />} />
      </Routes>
    </>
  )
}

export default Router
