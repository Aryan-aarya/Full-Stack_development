// let a=Math.random();
// console.log(a);

// primitive string ----

// let lastName="babbar";

// string constructure function----- (string as object)

// let firstName= new String("love");

// let message="this is my ${lastName} message";
// let words=message.split(" ");
// console.log(words);


// using template litral (``)-----------
// here ${lastName} is a placeholder

// let message=
// `this is my 

// ${lastName}

// message`;
// console.log(message);

// date --------------------
// let date=new Date();

// let date2=new Date("april 11 2003 10:15:5");

// let date3=new Date(2003,3,11,7);
// date3.setFullYear(2010);
// console.log(date3);

// arrays -------------(we can store different type of data)

    // creation of array ------
        // let num=[1,4,5,7];
        // console.log(num);
        
    // insertion in arrays-----------
        // let num=[1,4,5,7];
        // at end------
            // num.push(9); 
            // console.log(num);
        // at begning -----------------
            // num.unshift(8);
            // console.log(num);
        // at middle ---------------------------
            // num.splice(2,0,"a","b","c","d",99);
            // console.log(num);

    // searching in array --------------------
        // let num=[1,4,5,7];
        // console.log(num);

        // console.log(num.indexOf(5));
        // console.log(num.indexOf(10));
        // // present or not 
        // console.log(num.includes(5));

    // searching in array using reference --------------
        // let courses=[
        //     {no:1,naam:'love'},
        //     {no:2,naam:'rahul'}
        // ];
        // console.log(courses);
        // we can not use indexOf function while using reference ----
            // console.log(courses.indexOf({no:1,naam:'love'}));
        
        // we have to use call back function (predicate function) ---
            // let course=courses.find(function(course){
            //     return course.naam=='love';
            // })

            // we can also write this as ----(using arrow function =>)
            // course=courses.find(course => course.naam=='love');

            // console.log(course);

        // remove element using array ----------
            // let numbers=[1,2,3,4,5,6,7];
            // console.log(numbers);
            // end --------------
                // numbers.pop();
                // console.log(numbers);

            // begin -----------
                // numbers.shift();
                // console.log(numbers);

            // middle --------------
                // numbers.splice(2,1);
                // console.log(numbers);

        // emptying an array ---------

            // let numbers=[1,2,3,4,5];
            // let numbers2=numbers;

            // // numbers=[];

            // // numbers.length=0;

            // // numbers.splice(0,numbers.length);

            // console.log(numbers);
            // console.log(numbers2);

        // combine array -------------
            // let numbers=[1,2,3];
            // let numbers2=[4,5,6];
            // let combine=numbers.concat(numbers2);
            // console.log(combine);

            // using spread oprator --------
            // let combine=[...numbers,...numbers2];
            // console.log(combine);

        // slicing a array -----------
            // let numbers=[1,2,3,4,5,6];
            // console.log(numbers.slice(2,4));

        //itrating an array-----------
            // let arr=[10,20,30,40,50];
            // for of loop --------
                // for(let value of arr){
                //     console.log(value);
                // }

            // for each loop ---------
                // arr.forEach(function(number){
                //     console.log(number);
                // });


                // arr.forEach((number)=>  console.log(number));

        // joining array-------------- 
            // let number=[10,20,30,40,50];
            // console.log(number.join(','));

            // let message="this is my first message";
            // let parts=message.split(' ');

            // console.log(parts);

            // let joined=parts.join(' ');
            // console.log(joined);

        // sorting array -------------------
            // let number=[1,45,87,3,22,3,20,10,50];
            // console.log(number);
            // number.sort();
            // console.log(number);
            // number.reverse();
            // console.log(number);

        
        // filtering array ----------------
            // let number=[1,2,-4,-5];
            // let filtered=number.filter((value)=> value >=0);
            // console.log(filtered);

        // mapping arrays ---------------
            // let number=[7,8,9,10];
            // console.log(number);
            // let item=number.map((value)=> 'student_no'+value);
            // console.log(item);


        // maping with objects --------
        // let number=[1,2,-6,-9];
        // let filtered=number.filter(value=> value >= 0);
        // console.log(filtered);
        // let items = filtered.map(function(num) {
        //     return {value: num};
        // })
        // console.log(items);