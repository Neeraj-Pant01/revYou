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
import CategoryPage from './pages/CategoryPage'
import AllCategories from './pages/AllCategories'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/revyou/auth" element={<AuthForm />} />
        <Route element={<Layout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review/:id" element={<SingleProductPage />} />
          <Route path='/reviews/search' element={<SearchResultsPage />} />
          <Route path='/reviews/categories/list' element={<CategoryPage />} />
          <Route path='/reviews/all/categories' element={<AllCategories />} />


          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
          <Route path="/review/profile/:id" element={<ProfilePage />} />
          <Route path="/review/upload" element={<UploadReviewPage />} />
          </Route>

          </Route>
      </Routes>
    </>
  )
}

export default App
