import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/ChapterCard.css'
import SidebarSimple from './components/sidebarSimple'
import SidebarSearch from './components/sidebarSearch';
import './styles/sidebar.css'
import QuizApp from './components/quizApp';
import SubmenuWithSearch from './components/submenuWithSearch';
import './styles/submenuSearch.css'

function App() {
  return (
    <div className="App">
      <SidebarSimple />
      {
        //<SidebarSearch />
        //<SidebarSimple />
        //<QuizApp />
      }
    </div>
  );
}

export default App;
