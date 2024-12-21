//wrapping multiple components using div tag
function App() {
  return (
    <div>
      <Hello/>
      <WelcomeMsg/>
    </div>
  )
}
function Hello (){
  return <h1>Hello World</h1>
}
function WelcomeMsg(){
  return <h1>Welcome to React</h1>
}
export default App
