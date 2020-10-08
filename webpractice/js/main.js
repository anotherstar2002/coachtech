// console.log("Hello World");
// console.log("Hello World");

// let message = "Hello World";
// console.log(message);
// message = "Good night world";
// console.log(message);

// console.log(typeof 20);
// console.log(typeof "str");
// console.log(typeof true);
// console.log(typeof undefined);

// let bool = true;
// console.log(typeof bool);
// let str = String(bool);
// console.log(typeof str);

// let string = "123";
// console.log(typeof string);
// let num = Number(string);
// console.log(typeof num);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// console.log(Boolean(""));

// let say = "Hello";
// console.log(say);
// say = "Goodbye";
// console.log(say);

// let add = 6 + 2;
// let sub = 6 - 2;
// let mul = 6 * 2;
// let div = 6 / 2;

// let per = 5 % 2;
// console.log(per);

// let inc = 2;
// inc++;
// console.log(inc);
// let dec = 2;
// dec--;
// console.log(dec);

// let a = 2;
// let b = 2;
// console.log(a == b);

// let price = 2800;
// if (price < 1000) {
//   console.log("Cheap");
// } else if (price > 2000) {
//   console.log("Expensive");
// } else {
//   console.log("Good");
// }

// let person = 3;

// switch (person) {
//   case 1:
//     console.log("太郎さん");
//     break;
//   case 2:
//     console.log("次郎さん");
//     break;
//   case 3:
//     console.log("三郎さん");
//     break;
//   case 4:
//     console.log("四郎さん");
//     break;
//   case 5:
//     console.log("五郎さん");
//     break;
// }

// let sales = 1000;
// let tax = 1.1;
// console.log(sales * tax);

// let akun = 80 + 90 + 60 + 85 + 100;
// console.log(akun);

// let bkun = 40 + 30 + 50 + 25 + 60;
// console.log(bkun);

// if (akun > 300 && bkun > 300) {
//   console.log("Excellent!") 
// } else if (akun > 300 || bkun > 300) {
//   console.log("Normal") 
// } else {
//   console.log("Fight")
// };

// let omikuji = "大吉";

// switch (omikuji) {
//   case "大吉":
//     console.log("大吉！");
//     break;
//   case "中吉":
//     console.log("中吉!");
//     break;
//   case "小吉":
//     console.log("小吉！");
//     break;
//   case "吉":
//     console.log("吉!");
//     break;
//   case "凶":
//     console.log("凶!");
//     break;
//   case "大凶":
//     console.log("大凶!");
// }

// let array = ["taro", "jiro", "Saburo", "Shiro", "Goro"];

// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// array[1] = "次郎";

// console.log(array[1]);

// console.log(array.length);

// array.push("Rokuro");
// array.unshift("Ichiro");
// console.log(array);

// array.splice(1, 3);//番号が1（次郎）から3つ削除. 1と3を削除ではない
// console.log(array);

// let lists = ["taro", "jiro", "Saburo", "Shiro", "Goro"];

// for (let i = 0; i < lists.length; i++) {
//   console.log(lists[i]);
// }

// let c = 0;

// while (c < 10) {
//   c = c + 1;
//   console.log(c)
// };

// let test = ["国語","数学","英語"];

// test.push("理科");
// test.push("社会");
// console.log(test);
// console.log(test.length);


// for (let g = 0; g < 50; g++) {
//   if (g % 15 == 0) {
//     console.log("FizzBuzz")
//   } else if (g % 3 == 0) {
//     console.log("Fizz")
//   } else if (g % 5 == 0) {
//   console.log("Buzz") 
//   } else {
//     console.log(g);
//   }
// }

// let water = 1000;

// while (water > 0) {
//   console.log(water);
//   water = water - 180;
//   if (water <= 0) {
//     console.log("水を飲み干した");
//     break;
//   } 
// }

// let drinkWater = 180;
// while (water > 0) {
//   console.log(water);
//   water = water - drinkWater;
// }
// console.log("水を飲み干した");

// let d = 0;

// while (d < 10) {
//   d = d + 1;
//   console.log(d);
// }


// let f = 0;

// while (f < 10) {
//   f = f++
//   console.log(f);
// }

// let text = (number1, number2) => {
//   let value = number1 + number2;
//   return value;
// }

// console.log(text(3, 4));

// let array = ["taro", "jiro", "Saburo", "Shiro", "Goro"];

// array.forEach(function (item, index) {
//   if (item == "Saburo") {
//     console.log(`${item}は${index}番目の要素です`);
//   }
// });

// let c = 0;

// while (c < 10) {
//   c++
//   console.log(c);
// }

// let array = [8, 10, 5, 3, 2];

// let result = array.map(function (item) {
//   return item * 2;
// });

// console.log(result);


function result(name, score) {
  if (score >= 70 && score <= 100) {
    return `${name}君良くできました`;
  } else if (score >= 30 && score < 70) {
    return `${name}君普通です`;
  } else if (score >= 0 && score < 30) {
    return `${name}君もう少し頑張りましょう`;
  } else {
    return `正しい数字を入力してください`
  }
}

console.log(result("A", 80));
console.log(result("B", 15));
console.log(result("C", 55));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let twice = numbers.map(function (item) {
  if (item % 2 == 0) {
    return item * 2;
  } else if (item % 2 == 1) {
    return item;
  } else {
    return `整数を入力してください。`
  }});

console.log(twice);

let user = {
  say () {
    console.log("Hello")
  },
};

user.say();

let user2 = {
  name: "Taro",
  age: 20,
  say() {
    console.log(this.name);
  },
};

console.log(user2.name);
user2.say();

let student = {
  name: "Taro",
  age: 20,
  gender: "Male",
  skills: ["html", "css", "js"],
  wife:null,
};

let json = JSON.stringify(student);

console.log(student);
console.log(json);

let school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentence() {
    let data;
    this.skills.forEach(function(skill, index) {
      if (index == 0) {
        data = skill;
      } else {
        data = `${data}と${skill}`;
      }
    });
    return `${this.name}は${this.month}カ月で${data}を学ぶことができます`;
  },
};

console.log(school.createSentence());

let check = {
  goods: ["bag", "wallet", "coincase", "sox"],
  lineup() {
    let d;
    this.goods.forEach((product, index)=>{
      if (index == 0) {
        d = product;
      } else {
        d = `${d}&${product}`;
      }
    });
    return `${d}`;
  },
};

console.log(check.lineup());



