
export const Switch = (name: string): string => {
  
  switch (name) {
    case "/":
      return name
      break;
    case "/search":
      return name
      break;

    default:
      return 'Invalid route'
      break;
  }
}
