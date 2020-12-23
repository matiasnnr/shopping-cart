export const handleSumTotal = (element) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = element.reduce(reducer, 0);
    return sum;
  }