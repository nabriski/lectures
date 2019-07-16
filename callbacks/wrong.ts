let pResolv = Promise.resolve(5);
let pReject = Promise.reject(10);

let f = async () => {
  let value1 = await pResolv.catch(err => {
    console.log(`error1!: ${err}`);
  });
  console.log(`value1: ${value1}`);

  let value2 = await pReject.catch(err => {
    console.log(`error2!: ${err}`);
  });
  console.log(`value2: ${value2}`);
};

f();
