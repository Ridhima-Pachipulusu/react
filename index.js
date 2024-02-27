// console.log(a);
// console.log(b);
// console.log(c);
// var a=1;
// let b=2;
// const c=3;
// const head=document.createElement("h1");
// head.innerhtml="welcome";
// const content=document.getElementById("root");
// content.appendChild(head);
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "i am h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
