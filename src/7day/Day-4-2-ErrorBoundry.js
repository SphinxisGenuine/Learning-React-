import React from "react";
import React from "react";
 import { Component} from "react";

function App2() {

  return <>
  <ErrorBoundary>
    
  <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati corporis atque facere?</Card>
  </ErrorBoundary>
  <Card2>Lorem ipsum dolor sit.</Card2>
  </>
}                                                                                            


// understand Class base components
class Counter extends Component{
  state ={count:0};

  increment =()=>{
    this.setState({count:this.state.count+1}) 

  };
  render(){
    return (
      <div>
        <p>COunt:{this.state.count}</p>
        <button onClick={this.increment}>increase</button>
      </div>
    )
  }
}

function Card({children}){
  throw new Error("ffff")
  return <div style={{backgroundColor:"#7dd3fc",borderRadius:10,margin:10,padding:30,color:"#0c4a6e" }}>
    {children}
    </div>
}
function Card2({children}){
  return <div style={{backgroundColor:"#e4c215",borderRadius:10,margin:10,padding:30,color:"#5c4d05 "}}>
    {children}
    </div>
}

// error csrd 
class ErrorBoundary extends React.Component {
constructor(props){
  super(props);
  this.state={hasErrors:false}
  }
  static getDerivedStateFromError(error){
    return {hasErrors:true}
  }
  componentDidCatch(error,info){
    console.log("Error Caught: ",error,info);

  }
render(){
  if (this.state.hasErrors){
    return <Card2>Something went wrong </Card2>
  }
  return this.props.children
}


}

