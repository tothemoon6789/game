// hinh nhu la phai import React from "react" khi extend React.component hay sao y
import React from "react";

// CLASS COMPONENT
// KHONG SU DUNG NHIEU TRONG react
class Car extends React.Component{
    
    render(){
        return <h1>This is class component</h1>
    }
}
// FUNCTION COMPONENT
function House (){
    return <h1>This is function component</h1>
}
export default Car;