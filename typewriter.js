const sentence = "hello there from lighthouse labs";

const displayStr = function(str) {
  let timer = 0;
    for (let i = 0; i < str.length; i++) {
      timer += 50;
      setTimeout( () => {
        process.stdout.write(str[i]);
        if (i === (str.length - 1)) {
          process.stdout.write('\n');
        }
      }, timer);
  }
};

displayStr(sentence);



