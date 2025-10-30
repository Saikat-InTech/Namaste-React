const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="fun-user-card">
      <h1>this is function compomnent</h1>
      <h4>Count:{count}</h4>
      <h2>Name:{name}</h2>
      <h3>locations:{location}</h3>
      <h4>date:27.10.2025</h4>
      <h1>hhffdfytfjjhhh</h1>
    </div>
  );
};
export default User;
