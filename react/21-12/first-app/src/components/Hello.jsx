//creating and acessing object inside array in component
function Hello (){
    const student =[
        {
            name : "ram",
            age : 20,
            height: 5.4,
            address: {
                city: "sambalpur",
                state: "odisha",
                pincode: 768002
            }
        },
        {
            name : "shyam",
            age : 22,
            height: 5.5,
            address: {
                city: "sonepur",
                state: "odisha",
                pincode: 768748
            }
        },
        {
            name : "akash",
            age : 21,
            height: 5.3,
            address: {
                city: "bargarh",
                state: "odisha",
                pincode: 764352
            }
        }
    ]
    return (
        <>
         {student.map((stud)=>{
            return <h4> name = {stud.name} , age = {stud.age}, height = {stud.height}, address = {stud.address.city}, {stud.address.state} , {stud.address.pincode}  </h4>
         })}
        </>
    ) 
}
export default Hello;