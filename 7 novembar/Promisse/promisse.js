console.log("hi");

var p1 = new Promise(function (resolve, reject) {
    var m = 0;
    for (var i = 0; i < 10; i++) {
        setTimeout(function (i) {
            console.log("p1" + i);
            if (i === 9) {
                resolve();
            }

            console.log("promise 1" + i);
        }, i, i);

        //    setTmeout()

        // var now = new Date();

        // if (now.getMilliseconds() % 2 === 0 ){
        // reject("deljivo sa dva,uzas");

    }});



        var p2 = new Promise(function (resolve, reject) {
            var n = 0;
            for (var i = 0; i < 100; i++) {
                setTimeout(function (i) {
                    console.log("promise2" + i);
                    if (i === 99) {
                        resolve();
                    }
                }, i, i);
            }

        });

        console.log("keep working2");

        //  p1.then(function(res) {
        //      console.log("p1 is done with" + res);

        //  }). catch(function(reaseon){
        //     console.log(reason);
        //  });

        var allPromises = Promise.race([p1, p2]);

        allPromises.then(function () {
            console.log("all promises done!")
        });
        console.log("not done!");

//  console.log("keep working2"); 
