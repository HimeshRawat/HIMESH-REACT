const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "HELLO JI kya hal hai apkeee"),
      React.createElement("h2", {}, "HELLO HIMESH"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "HELLO JI kya hal hai apkeee"),
      React.createElement("h2", {}, "HELLO HIMESH"),
    ]),
  ]);
  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  