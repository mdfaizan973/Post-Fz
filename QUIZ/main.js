// 24 jan 2024

function jan24() {
  let x;
  console.log(x == undefined);

  const type = null;
  console.log(typeof type);

  console.log("2" > 1);
}
// jan24();

// 29 jan 2024
function jan29() {
  console.log(a);
  let a;

  console.log(b);
  var b;

  // console.log(c);
  // const c;
}
// jan29();
function jan_29() {
  const array_1 = [1, 2, 3, 4];
  const array_2 = array_1.fill(0);
  console.log(array_1);
  console.log(array_2);
}
// jan_29();
function jan_30() {
  // ! 1st code snippet
  let d1 = { name: "faizan" };
  console.log(delete d1.name);

  let d2 = { name: "faizan" };
  console.log(delete d2);

  // ! 2nd code snippet
  const a = 10;
  if (a == 5) {
    console.log("5");
  } else {
    console.log("Not 5");
    if (a == 10) {
      console.log("10");
    }
  }

  // ! 3rd code snippet
  console.log("4" + "3" * "2" - "1");
}
// jan_30();

function jan_31() {
  // ! 1st code snippet
  console.log("Text"[1 + 1]);

  // ! 2nd code snippet
  const data = ["a", "b", "c"];
  const [y, z] = data;
  console.log(y);

  // ! 3rd code snippet

  console.log("❤️" === "❤️");
  console.log("❤️" == "❤️");

  // ! 4th code snippet
  let a = false || {} || null;
  console.log(a);

  let b = null || false || "";
  console.log(b);
}
// jan_31();

function fab_1() {
  // ! 1st code snippet
  console.log(Promise.resolve(5)); // Promise { 5 }
  console.log(Promise.reject(5)); // Error
}
// fab_1();

function fab_2() {
  // ! 1st code snippet

  let a = [] || 0 || true;
  console.log(a);

  // ! 2nd code snippet

  let array = [1, 2, 3, 4, 5];
  array = [];
  console.log(array.length);
}
// fab_2();
function fab_4() {
  // ! 1st code snippet

  // if (true) {
  //   var x = 10;
  // }
  // console.log(x);
  // if (true) {
  //   let y = 12;
  // }
  // console.log(y);

  // ! 2nd code snippet
  try {
    console.log("Try");
  } catch (err) {
    console.log("Error catched");
  }

  // ! 3rd code snippet
  try {
    throw new Error("This is Error");
  } catch (err) {
    console.log("Error catched");
  }
}
// fab_4();

function fab_99() {
  // ! 1st code snippet
  let set = new Set([1, 1, 2, 3, 4]);
  console.log(set);

  // ! 2nd code snippet
  console.log(5 + "1");
  console.log("5" - 1);

  // ! 3rd code snippet
  const say = "Hello JavaScript";
  console.log(say);
}
// fab_99();
function fab_15() {
  // ! 1st code snippet

  if ([]) {
    console.log("Hello");
  } else {
    console.log("Bye");
  }

  // ! 2nd code snippet
  console.log(null >= 0);

  // ! 3rd code snippet
  let a = 10,
    b = 10,
    c = 10;
  if ((a == b) == c) cosole.log("Hello");
  else console.log("Bye");

  // ! 4th code snippet

  let x = true + false;
  console.log(x);

  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1);
  }
}
// fab_15();

function fab_17() {
  // new keyword creates object and object  ! == number

  let a = 3;
  let b = new Number(3);
  let c = 3;
  console.log(a == b);
  console.log(a === b);
  console.log(b === c);
}
// fab_17();

function fab_21() {
  console.log(this);
  console.log(window);
  console.log(this == window);
}
// fab_21();

function fab_29() {
  // ! 1st code snippet

  console.log([] == "");
  console.log([] == []);
  console.log([] == {});
  console.log({} == {});
  // console.log([] === {});

  // ! 2nd code snippet

  const arr = [2, 4, 6, 3, 6];
  const [, a, , b] = arr;
  console.log(a, b);

  // ! 3rd code snippet
  const x = "1" + 1 + "1";
  console.log(x);
}
fab_29();
