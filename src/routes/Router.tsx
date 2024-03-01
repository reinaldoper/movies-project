import InitialApp from '../page/InitialApp'
import { Route, Routes } from 'react-router-dom'
import QuerySearch from '../page/QuerySearch'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialApp />} />
        <Route path="/search" element={<QuerySearch />} />
      </Routes>
    </>
  )
}

export default Router
