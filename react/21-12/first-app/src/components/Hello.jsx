//creating and acessing object in component
function Hello (){
    const student ={
        name : "ram",
        age : 20,
        height: 5.4
    }
    return (
        <>
        <h1>Hello my friend {student.name}</h1>
        <h1>you are {student.age} years old</h1>
        <h1>you are {student.height} feet tall</h1>
        </>
    ) 
}
export default Hello;