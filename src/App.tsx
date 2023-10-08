import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserProvider from './components/UserProvider';

function App() {
  return (
    <UserProvider>
      <SearchBar />
      <UserList />
    </UserProvider>
  )
}

export default App
