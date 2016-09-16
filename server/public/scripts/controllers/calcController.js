myApp.controller('CalcController', ['$scope', '$http', function($scope, $http) {
  console.log("CalcController works");

  $scope.customerInfo = {};
  $scope.firstBike = {};
  $scope.secondBike = {};
  $scope.diffBike = {};

  $scope.calcTheDiff = function () {
    $scope.diffBike = {};
    $scope.diffBike.toptubeLength = 0;//trying to get rid of the NaNs on the dom
    $scope.diffBike.toptubeLength = $scope.firstBike.toptubeLength - $scope.secondBike.toptubeLength;
    console.log($scope.diffBike.toptubeLength);

    $scope.diffBike.headtubeAngle = $scope.firstBike.headtubeAngle - $scope.secondBike.headtubeAngle;
    console.log($scope.diffBike.headtubeAngle);

    $scope.diffBike.headtubeLength = $scope.firstBike.headtubeLength - $scope.secondBike.headtubeLength;
    console.log($scope.diffBike.headtubeLength);

    $scope.diffBike.effectiveToptube = $scope.firstBike.effectiveToptube - $scope.secondBike.effectiveToptube;
    console.log($scope.diffBike.effectiveToptube);

    $scope.diffBike.bbHeight = $scope.firstBike.bbHeight - $scope.secondBike.bbHeight;
    console.log($scope.diffBike.bbHeight);

    $scope.diffBike.wheelBase = $scope.firstBike.wheelBase - $scope.secondBike.wheelBase;
    console.log($scope.diffBike.wheelBase);

    $scope.diffBike.seattubeLength = $scope.firstBike.seattubeLength - $scope.secondBike.seattubeLength;
    console.log($scope.diffBike.seattubeLength);

    $scope.diffBike.seattubeAngle= $scope.firstBike.seattubeAngle - $scope.secondBike.seattubeAngle;
    console.log($scope.diffBike.seattubeAngle);

    $scope.diffBike.chainstayLength = $scope.firstBike.chainstayLength - $scope.secondBike.chainstayLength;
    console.log($scope.diffBike.chainstayLength);

    $scope.diffBike.reach = $scope.firstBike.reach - $scope.secondBike.reach;
    console.log($scope.diffBike.reach);

    clearcanvas();
    addBikeToCustomer();
    makingPictures();
  }

  // function validateForm(one, two, three) {
  //     var x = one;
  //     var y = two;
  //     var z = three;
  //     if ((x == null || x == "") || (y == null || y == "")) {
  //         z = 0;
  //         return z;
  //     }
  // }

  // function resultsAreNan () {
  //   if ($scope.diffBike.toptubeLength === undefined || $scope.diffBike.toptubeLength === NaN || $scope.diffBike.toptubeLength === ""  || $scope.diffBike.toptubeLength === null) {
  //     $scope.diffBike.toptubeLength = 0;
  //     console.log($scope.diffBike.toptubeLength);
  //   } else {
  //     console.log("It didn't work. This is what you have ", $scope.diffBike.toptubeLength);
  //   }
  // }


  makingPictures = function () {
    var canvas = "";

    var bbx = 190; //bb height
    var bby = 320; //bb height
    var stx = 175; //seatstay length
    var sty = 180; //seatstay length
    var csx = 65; //chainstay lenght
    var csy = 305;//chainstay length
    var htx = 365;//headtube length
    var hty = 190;//headtube length
    var rx = 370; //reach but actuall the length of downtube
    var ry = 230; //reach but actuall the length of downtube

//seattube length adjuster
  if ($scope.diffBike.seattubeLength > 1 && $scope.diffBike.seattubeLength <= 20) {
    stx += 2;
    sty += 18;
  }
  else if ($scope.diffBike.seattubeLength > 20) {
    stx += 4;
    sty += 32;
  } else if ($scope.diffBike.seattubeLength < 0 && $scope.diffBike.seattubeLength >= -20) {
    stx -= 2;
    sty -= 18;
  } else if ($scope.diffBike.seattubeLength < -20) {
    stx -= 4;
    sty -= 32;
  }

//chainstay length adjuster
  if ($scope.diffBike.chainstayLength > 1 && $scope.diffBike.chainstayLength <= 10) {
    csx += 8;
    csy += 1;
  } else if ($scope.diffBike.chainstayLength > 10) {
    csx += 16;
    csy += 2;
  } else if ($scope.diffBike.chainstayLength < 0 && $scope.diffBike.chainstayLength >= -10) {
    csx -= 8;
    csy -= 1;
  } else if ($scope.diffBike.chainstayLength < -10) {
    csx -= 16;
    csy -= 2;
  }

//headtube length adjuster
  if ($scope.diffBike.headtubeLength > 1 && $scope.diffBike.headtubeLength <= 10) {
    rx += 1;
    ry += 8;
  } else if ($scope.diffBike.headtubeLength > 10) {
    rx += 2;
    ry += 16;
  } else if ($scope.diffBike.headtubeLength < 0 && $scope.diffBike.headtubeLength >= -10) {
    rx -= 1;
    ry -= 8;
  } else if ($scope.diffBike.headtubeLength < -10) {
    rx -= 2;
    ry -= 16;
  }

  //reach adjuster
    if ($scope.diffBike.reach > 1 && $scope.diffBike.reach <= 25) {
      rx -= 15;
      htx -= 15;
    } else if ($scope.diffBike.reach > 25) {
      rx -= 30;
      htx -= 30;
    } else if ($scope.diffBike.reach < 0 && $scope.diffBike.reach >= -25) {
      rx += 15;
      htx += 15;
    } else if ($scope.diffBike.reach < -25) {
      rx += 30;
      htx += 30;
    }



    console.log("i work");
  var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext ("2d");
    ctx.beginPath();
    ctx.moveTo(190, 320); //BB
    ctx.lineTo(175, 180); //BB to the top of seattube
    ctx.lineTo(65, 305);  //top of seattube to end of chainstay
    ctx.lineTo(190, 320);   //end of chainstay to BB
    ctx.lineTo(370, 230); //BB to the end of downtube
    ctx.lineTo(365, 190); //bottom of headtube to top
    ctx.lineTo(175, 180); //top of headtube to the toptube at seattube
    ctx.lineJoin = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8.0;
    ctx.stroke();

    cty = canvas.getContext ("2d");
    cty.beginPath();
    cty.moveTo(bbx, bby); //BB
    cty.lineTo(stx, sty); //BB to the top of seattube
    cty.lineTo(csx, csy);  //top of seattube to end of chainstay
    cty.lineTo(bbx, bby);   //end of chainstay to BB
    cty.lineTo(rx, ry); //BB to the end of downtube
    cty.lineTo(htx, hty); //bottom of headtube to top
    cty.lineTo(stx, sty); //top of headtube to the toptube at seattube
    cty.lineJoin = "round";
    cty.strokeStyle = "green";
    cty.lineWidth = 3.0;
    cty.stroke();

  }

  function addBikeToCustomer () {
    $scope.customerInfo.bikeOneInfo = $scope.firstBike;
    $scope.customerInfo.bikeTwoInfo = $scope.secondBike;
    $scope.customerInfo.bikeCompInfo = $scope.diffBike;

    console.log("this is all the data together: ", $scope.customerInfo);
  }

  $scope.submitNewComparison = function () {
  var data = $scope.customerInfo;
  $http.post('/bikes', data)
    .then(function () {
      console.log('POST /bikes', data);
    });
};

$scope.print = function() {
    window.print();
}

$scope.bikeInfo = function (input) {
      var choose = input;
      if (choose == 1) {
        console.log("its a toptube");
        alert('Toptubes are this thing');
      }else if (choose == 2) {
        console.log('its a headangle');
        alert('headanle is this thing');

        };
    };

}]);

function clearcanvas()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
