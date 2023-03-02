import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import PostPage from './pages/post'
import PostsPage from './pages/posts'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<PostsPage />} />
        <Route path={ROUTES.POST} element={<PostPage />} />
      </Routes>
    </Router>
  )
}

export default App
