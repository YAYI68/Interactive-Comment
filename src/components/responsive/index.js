export const respond = (breakpoints) => {
    if (breakpoints === "phone"){
      return "@media(max-width:768px)"
    }
    if (breakpoints === 'tablet'){
      return "@media(max-width:1100px)"
    }
  }