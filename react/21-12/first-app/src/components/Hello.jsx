// creating and acessing variable in component
const name = "ram";
const age = 20;
const height = 5.4
function Hello (){
    return (
        <>
        <h1>Hello my friend {name}</h1>
        <h1>you are {age} years old</h1>
        <h1>you are {height} feet tall</h1>
        </>
    ) 
}
export default Hello;