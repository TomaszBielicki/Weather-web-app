function App() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=53290998ea334cafbf1183417221005&q=London&aqi=no"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div className="App"></div>;
}

export default App;
