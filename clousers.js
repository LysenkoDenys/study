//https://www.youtube.com/watch?v=mI6Jcfsgma4&t=20s&ab_channel=PomazkovJS

// 1:
//{link:-->null,
// variables: {
// createIncrement:function;
// }}

function createIncrement() {
  // 2:
  //{link:-->global lexical environment(1),
  // variables: {
  // count:0,
  // increment: function,
  // message: "Count is 0",
  // log: function,
  // }}

  let count = 0;
  function increment() {
    // 3:
    //{link:-->createIncrement(2),
    // variables: null
  }
    count++;// 0-->1-->2
  }
  let message = `Count is ${count}`;
  function log() {
    // 4:
    //{link:-->createIncrement(2),
    // variables: null
  }
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();//0
increment();//1
increment();//3
log();//Count is 0

// if we want to log() --> Count is 3:
// we should put   let message = `Count is ${count}` inside the log().