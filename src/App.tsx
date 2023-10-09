import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserProvider from './components/UserProvider';

function App() {
  return (
    <div className='mx-auto max-w-6xl my-9'>
      <UserProvider>
        <SearchBar />
        <UserList />
      </UserProvider>
    </div>
  )
}

export default App
