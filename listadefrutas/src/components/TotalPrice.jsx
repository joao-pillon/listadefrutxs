const TotalPrice = ({ fruits }) => {

  const acc = fruits?.reduce( (previous, next) => {
    return previous + next.price;
  }, 0);

  return <>Total price:{acc}</>;

};

  
export default TotalPrice;
