enum Message {
  Success = "SUCCESS",
  Failure = "FAILURE",
}


function processResult(result: boolean): Message {
    return (result ? Message.Success : Message.Failure);
}

console.log(processResult(true));
console.log(processResult(false));