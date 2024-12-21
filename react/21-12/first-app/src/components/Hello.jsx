//creating local variables instead of global
function Hello (){
    const name = "ram";
    const age = 20;
    const height = 5.4;
    const hobbies = ["reading books", "painting"]
    function message(){
        return "good luck for your react career"
    }
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
        <h2>total rating = {20+10}</h2>
        </>
    ) 
}
export default Hello;