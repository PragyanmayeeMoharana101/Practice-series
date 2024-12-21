//creating and acessing nested object in component
function Hello (){
    const student ={
        name : "ram",
        age : 20,
        height: 5.4,
        address: {
            city: "sambalpur",
            state: "odisha",
            pincode: 768002
        }
    }
    return (
        <>
        <h1>Hello my friend {student.name}</h1>
        <h1>you are {student.age} years old</h1>
        <h1>you are {student.height} feet tall</h1>
        <h1>you are living at {student.address.city}, {student.address.state}, {student.address.pincode} </h1>
        </>
    ) 
}
export default Hello;