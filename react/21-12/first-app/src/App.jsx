//we can also use <> </> to wrap multiple components

function App() {
  return (
    <>
      <Hello/>
      <WelcomeMsg/>
    </>
  )
}
function Hello (){
  return <h1>Hello World</h1>
}
function WelcomeMsg(){
  return <h1>Welcome to React</h1>
}
export default App
