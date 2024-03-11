enum Respons {
  No = 0,
  Yes = 1,
}

function getResponse(response: number) {
  switch (response) {
    case Respons.No:
      console.log("the response is No");
      break;
    case Respons.Yes:
      console.log("the response is Yes");
      break;
    default:
      console.log("Invalid response");
  }
}

getResponse(0)
getResponse(1)
getResponse(7)