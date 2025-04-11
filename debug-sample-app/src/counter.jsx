function Counter({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* <button onClick={() => setCount(count++)}>Increment</button> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
