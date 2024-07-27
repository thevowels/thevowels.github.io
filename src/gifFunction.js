const gifFunction = () =>{
  let index = 0;
  return (imageArr) =>{
      let image = imageArr[index];
      index = (index + 1) % imageArr.length;
      return image;
  }
}
const getCurrentGif = gifFunction()
export { getCurrentGif };