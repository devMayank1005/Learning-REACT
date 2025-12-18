var h1 = React.createElement("h1", null, "Hello World")

//var root = ReactDOM.createRoot(document.querySelector('#root'))
//root.render(h1)
var h2 = React.createElement("h2", null, "Hello World 2")
var h3 = React.createElement("h3", null, "Hello World 3")
    

var div = React.createElement("div", {id: "parent", className: "elem"}, [h1,h2,h3])
var root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(div) 