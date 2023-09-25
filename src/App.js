import "./App.css";

export default function App() {
  return (
    <div className="App">
      logo
      <h2>My Weather App</h2>
      <div className="container">
        <footer>
          This project was coded by {""}
          <a
            href="https://www.tisha.io"
            target="_blank rel=noopener noreferrer"
          >
            Ticha Maenga {""}
          </a>
          {""} and is
          <a
            href="https://github.com/TishaNaturralle/myawesome-react-weather-app"
            target="_blank rel=noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          <a
            href="https://app.netlify.com/sites/voluble-cascaron-2824a8/"
            target="_blank rel=noopener noreferrer"
          >
            and Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
