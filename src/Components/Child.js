const Child = (props) => {
  
    props.func('My name is Dean Winchester & this is my brother Sammie');
    
    const new_style ={
        margin: "100px"
      }

    return (
      <>
        <h1 style={new_style}>I am the Child Component!</h1>
      </>
    );
  }
  
  export default Child;