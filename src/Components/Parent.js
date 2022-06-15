import Child from './Child';

function App() {
  
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    // const new_data = data;
  }
  const new_style ={
    margin: "100px"
  }
  
  return (
    <div style={new_style}>
      <Child
        func={pull_data}
      />
      <h1>I am the parent function and the fetched data will be</h1>
      <p>{pull_data}</p>
    </div>
  );
}

export default App;