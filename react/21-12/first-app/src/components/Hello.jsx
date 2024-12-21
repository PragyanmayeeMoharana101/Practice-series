// creating and acessing a function in component
const name = "ram";
const age = 20;
const height = 5.4;
const hobbies = ["reading books", "painting"]
function message(){
    return "good luck for your react career"
}
function Hello (){
    return (
        <>
        <h1>Hello my friend {name}</h1>
        <h1>you are {age} years old</h1>
        <h1>you are {height} feet tall</h1>
        <h1>your hobbies are - 
            {hobbies.map ((hobby)=>{
                return <span> "{hobby}" ,</span>
            })}
        </h1>
        <h2>{message()}</h2>
        </>
    ) 
}
export default Hello;