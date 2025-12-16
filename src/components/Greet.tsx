type greetProp = {
  name: string;
  age: number;
  isLogin: boolean;
};

function Greet(prop: greetProp) {
  return (
    <>
      <div>Greet {prop.name}</div>
      <span>Age : {prop.age}</span>
      <p>User Login: {prop.isLogin ? "Yes" : "No"}</p>
    </>
  );
}

export default Greet;
