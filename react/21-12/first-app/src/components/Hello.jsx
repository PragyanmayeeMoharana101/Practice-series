// creating and acessing array in component
const name = "ram";
const age = 20;
const height = 5.4;
const hobbies = ["reading books", "painting"]
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
        </>
    ) 
}
export default Hello;