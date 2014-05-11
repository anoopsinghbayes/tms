/**
 * Created by anoop on 19/4/14.
 */
angular.module('mean').controller('listCustomer', ['$scope','Customers', function ($scope,Customers) {

    $scope.customers=[
        {
            "id": 0,
            "isActive": false,
            "creditLimit": "1,355.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Jaime Kline",
            "companyName": "DEMINIMUM",
            "email": "jaimekline@deminimum.com",
            "phone": "+1 (913) 536-3526",
            "address": "426 Preston Court, Tilleda, West Virginia, 2095",
            "registered": "2014-01-28T00:44:11 -06:-30",
            "latitude": 23,
            "longitude": -30
        },
        {
            "id": 1,
            "isActive": false,
            "creditLimit": "1,072.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Selena Thornton",
            "companyName": "ATGEN",
            "email": "selenathornton@atgen.com",
            "phone": "+1 (970) 428-3586",
            "address": "546 Cheever Place, Imperial, Texas, 1681",
            "registered": "2014-02-16T00:44:58 -06:-30",
            "latitude": 40,
            "longitude": -96
        },
        {
            "id": 2,
            "isActive": true,
            "creditLimit": "2,429.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Leach Carroll",
            "companyName": "PLUTORQUE",
            "email": "leachcarroll@plutorque.com",
            "phone": "+1 (844) 559-3232",
            "address": "241 Freeman Street, Dexter, Tennessee, 7517",
            "registered": "2014-01-20T12:27:32 -06:-30",
            "latitude": -34,
            "longitude": -94
        },
        {
            "id": 3,
            "isActive": true,
            "creditLimit": "2,289.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Kemp Bird",
            "companyName": "BALUBA",
            "email": "kempbird@baluba.com",
            "phone": "+1 (837) 523-2695",
            "address": "506 Liberty Avenue, Toftrees, Kansas, 8236",
            "registered": "2014-03-22T13:32:13 -06:-30",
            "latitude": -42,
            "longitude": 47
        },
        {
            "id": 4,
            "isActive": true,
            "creditLimit": "1,471.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Caroline Fox",
            "companyName": "DIGIQUE",
            "email": "carolinefox@digique.com",
            "phone": "+1 (886) 598-2185",
            "address": "675 Wogan Terrace, Calpine, Arkansas, 9575",
            "registered": "2014-03-03T15:40:36 -06:-30",
            "latitude": -44,
            "longitude": 10
        },
        {
            "id": 5,
            "isActive": true,
            "creditLimit": "1,278.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Cecilia Roberts",
            "companyName": "ANOCHA",
            "email": "ceciliaroberts@anocha.com",
            "phone": "+1 (800) 401-3208",
            "address": "614 Hinckley Place, Turah, Oregon, 8631",
            "registered": "2014-02-07T04:01:37 -06:-30",
            "latitude": 78,
            "longitude": -79
        },
        {
            "id": 6,
            "isActive": false,
            "creditLimit": "2,398.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Donaldson Klein",
            "companyName": "ENOMEN",
            "email": "donaldsonklein@enomen.com",
            "phone": "+1 (930) 561-2741",
            "address": "974 Maujer Street, Choctaw, Arizona, 5729",
            "registered": "2014-03-11T15:48:04 -06:-30",
            "latitude": 36,
            "longitude": -42
        },
        {
            "id": 7,
            "isActive": false,
            "creditLimit": "1,176.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Dolores Dejesus",
            "companyName": "KRAGGLE",
            "email": "doloresdejesus@kraggle.com",
            "phone": "+1 (808) 537-3769",
            "address": "441 Cypress Avenue, Maybell, California, 7618",
            "registered": "2014-02-23T20:19:22 -06:-30",
            "latitude": -22,
            "longitude": 154
        },
        {
            "id": 8,
            "isActive": true,
            "creditLimit": "1,467.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Cain Collins",
            "companyName": "VERBUS",
            "email": "caincollins@verbus.com",
            "phone": "+1 (858) 534-2285",
            "address": "330 Monroe Street, Lund, Wisconsin, 3541",
            "registered": "2014-04-14T23:21:33 -06:-30",
            "latitude": -55,
            "longitude": 3
        },
        {
            "id": 9,
            "isActive": true,
            "creditLimit": "1,652.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Wendi Clemons",
            "companyName": "QUILTIGEN",
            "email": "wendiclemons@quiltigen.com",
            "phone": "+1 (814) 495-3189",
            "address": "242 Dikeman Street, Hickory, Massachusetts, 3929",
            "registered": "2014-03-02T08:06:50 -06:-30",
            "latitude": 38,
            "longitude": 74
        },
        {
            "id": 10,
            "isActive": false,
            "creditLimit": "3,457.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Lily Hicks",
            "companyName": "ZYTREX",
            "email": "lilyhicks@zytrex.com",
            "phone": "+1 (913) 557-2448",
            "address": "417 Benson Avenue, Wintersburg, North Dakota, 7991",
            "registered": "2014-02-07T16:04:53 -06:-30",
            "latitude": -18,
            "longitude": -168
        },
        {
            "id": 11,
            "isActive": true,
            "creditLimit": "2,595.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Townsend Mullins",
            "companyName": "PROFLEX",
            "email": "townsendmullins@proflex.com",
            "phone": "+1 (825) 583-3831",
            "address": "759 Stillwell Avenue, Gracey, Missouri, 9723",
            "registered": "2014-02-18T13:41:35 -06:-30",
            "latitude": -21,
            "longitude": 161
        },
        {
            "id": 12,
            "isActive": false,
            "creditLimit": "1,143.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Amanda Hale",
            "companyName": "ORBIFLEX",
            "email": "amandahale@orbiflex.com",
            "phone": "+1 (940) 440-3599",
            "address": "362 Amboy Street, Taycheedah, Delaware, 9705",
            "registered": "2014-01-29T03:54:40 -06:-30",
            "latitude": -41,
            "longitude": -22
        },
        {
            "id": 13,
            "isActive": true,
            "creditLimit": "2,175.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Maude Cook",
            "companyName": "ISOLOGIA",
            "email": "maudecook@isologia.com",
            "phone": "+1 (933) 516-2461",
            "address": "713 Bergen Court, Waterview, Washington, 3255",
            "registered": "2014-01-16T23:43:50 -06:-30",
            "latitude": -87,
            "longitude": -85
        },
        {
            "id": 14,
            "isActive": true,
            "creditLimit": "2,383.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Cheri Patton",
            "companyName": "EQUITAX",
            "email": "cheripatton@equitax.com",
            "phone": "+1 (962) 499-3044",
            "address": "394 India Street, Leyner, New York, 2809",
            "registered": "2014-02-08T11:50:56 -06:-30",
            "latitude": -71,
            "longitude": -124
        },
        {
            "id": 15,
            "isActive": true,
            "creditLimit": "2,754.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Hansen Shaffer",
            "companyName": "KAGGLE",
            "email": "hansenshaffer@kaggle.com",
            "phone": "+1 (998) 449-2081",
            "address": "973 Frost Street, Roulette, Kentucky, 3013",
            "registered": "2014-01-12T22:17:51 -06:-30",
            "latitude": 71,
            "longitude": 61
        },
        {
            "id": 16,
            "isActive": false,
            "creditLimit": "2,283.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Edwina Fernandez",
            "companyName": "CONCILITY",
            "email": "edwinafernandez@concility.com",
            "phone": "+1 (951) 600-3559",
            "address": "450 Ryder Avenue, Savannah, Utah, 2997",
            "registered": "2014-04-14T03:21:12 -06:-30",
            "latitude": 78,
            "longitude": 34
        },
        {
            "id": 17,
            "isActive": true,
            "creditLimit": "2,821.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Steele Heath",
            "companyName": "UNIA",
            "email": "steeleheath@unia.com",
            "phone": "+1 (969) 479-3681",
            "address": "858 Truxton Street, Tedrow, Connecticut, 2783",
            "registered": "2014-03-18T11:22:37 -06:-30",
            "latitude": 36,
            "longitude": -76
        },
        {
            "id": 18,
            "isActive": true,
            "creditLimit": "2,261.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Horn Pena",
            "companyName": "DREAMIA",
            "email": "hornpena@dreamia.com",
            "phone": "+1 (891) 480-3552",
            "address": "373 Harbor Lane, Suitland, Ohio, 9457",
            "registered": "2014-02-17T03:15:58 -06:-30",
            "latitude": 76,
            "longitude": -135
        },
        {
            "id": 19,
            "isActive": false,
            "creditLimit": "3,275.00",
            "picture": "http://placehold.it/32x32",
            "salesRep": "Miles Park",
            "companyName": "ZENTURY",
            "email": "milespark@zentury.com",
            "phone": "+1 (829) 577-3639",
            "address": "619 Sands Street, Cliff, New Mexico, 1620",
            "registered": "2014-03-29T01:28:20 -06:-30",
            "latitude": 24,
            "longitude": -82
        }
    ];


}]);

angular.module('mean').controller('createCustomerCtrl', ['$scope','Customers', function ($scope,Customers) {
    $scope.create = function() {
        customer = new Customers({
            name: $scope.customer.name,
            contact: $scope.customer.contact,
            email: $scope.customer.email,
            address: $scope.customer.address,
            credit:{limit:$scope.customer.credit.limit,
                period:$scope.customer.credit.period
            },
            salesrep:{
                name:$scope.customer.salesrep.name,
                phoneno:$scope.customer.salesrep.phoneno
            }

        });


        customer.$save(function(response) {
            $location.path('articles/' + response._id);
        });
    }
}]);