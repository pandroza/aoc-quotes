import './App.css';
import 'css-doodle';

function App() {
  return (
    <css-doodle>{`
      :doodle {
        @grid: 2 / 200px;
        grid: 1px;
      }
      background: @pick(red, pink);
    `}</css-doodle>
  );
}
export default App;
