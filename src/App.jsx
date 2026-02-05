import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';
import { TagPage } from './pages/TagPage';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/tag/:tag" element={<TagPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
