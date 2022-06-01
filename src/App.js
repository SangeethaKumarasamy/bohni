import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Post />
      </div>
    </Provider>
  );
}

export default App;