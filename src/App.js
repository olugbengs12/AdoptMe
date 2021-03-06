const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed)
    ]);
  };
  
  const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet,{
          name:"Luna",
          animal:"Dog",
          breed:"Local"}),
      React.createElement(Pet, {
          name:"Rotweiller",
          animal:"Dog",
          breed:"Foreign"
      }),
      React.createElement(Pet, {
          name:"German Shepherd",
          animal:"Dog",
          breed:"Foreign"
      })
    ]);
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));