import { useState, useMemo,useCallback } from "react";

export const UseMemoComponent =()=>{
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['']);
const num = 4;


  const expensiveCalculation = (num:number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

const memoCalculation = useMemo(()=>expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(count+1);
  };

  const addTodo = () => {
    console.log(" add to do ");
    setTodos([...todos, "New Todo"]);
  };
    const addTodoCallBack = useCallback(() => {
    console.log(" add to do useCallBack ");

    setTodos([...todos, "New Todo"]);
 }, [ count]);
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodoCallBack}>Add Todo with callback</button>
        <button onClick={addTodo}>Add Todo</button>

      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation </h2>
        {memoCalculation}
      </div>
    </div>
  );
};



