// to consume props we must place the props keyword as the argument.
// from there we can then use the prop by keying into the prop
// e.g. props.fullName

//   3 ways to consume props:
//   1 - use the props keyword e.g props.fullName
//   2 - destructure the prop inside the component e.g. const { name } = props;
//   3 - destructure the argument of the component e.g. const User = ({ fullName })

const User = ({ fullName, userId, userEmail }) => {
  //   const { name } = props;

  return (
    <div className="user-details">
      <h1>Name: {fullName}</h1>
      <p>Id: {userId}</p>
      <p>Email: {userEmail}</p>
    </div>
  );
};

export default User;
