const repository = () => {
  console.log('repository before error');
  // console.log('repository after error');
  throw {
    message: 'This is my error message',
    statusCode: 500,
  };
};
const controller = () => {
  // throw {
  //   message: 'This is my error message',
  //   statusCode: 400,
  // };
  console.log('callback 2 before callback1');
  repository(); // error here
  // throw new Error('Fake error');
  console.log('callback 2 after callback1');
};
const routes = () => {
  try {
    console.log('routes before calling controller');
    controller(); // error here
    console.log('routes after controller');
  } catch (error) {
    console.log('error caught in routes with message:', error.message, " and statusCode: ", error.statusCode);
  }
};

routes();
