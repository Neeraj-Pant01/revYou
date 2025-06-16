import Homepage from './pages/Homepage'
import Reviews from './pages/Reviews'
import SingleProductPage from './pages/SingleProductPage'
import { Route, Routes } from 'react-router-dom'
import AuthForm from './pages/Login'
import UploadReviewPage from './pages/UploadReviewPage'
import ProfilePage from './pages/Profile'
import SearchResultsPage from './pages/SearchResult'
import Layout from './layouts/Layout'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/revyou/auth" element={<AuthForm />} />
        <Route element={<Layout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review/:id" element={<SingleProductPage />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/review/profile/:id" element={<ProfilePage />} />
          <Route path="/review/upload" element={<UploadReviewPage />} />
          </Route>
          <Route path='/reviews/search' element={<SearchResultsPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
