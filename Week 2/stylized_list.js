var catFacts=[
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e008800aac31001185ed07",
        "user": "58e007480aac31001185ecef",
        "text": "Wikipedia has a recording of a cat meowing, because why not?",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-03-06T21:20:03.505Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e008630aac31001185ed01",
        "user": "58e007480aac31001185ecef",
        "text": "When cats grimace, they are usually \"taste-scenting.\" They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-02-07T21:20:02.903Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e00a090aac31001185ed16",
        "user": "58e007480aac31001185ecef",
        "text": "Cats make more than 100 different sounds whereas dogs make around 10.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-02-11T21:20:03.745Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e009390aac31001185ed10",
        "user": "58e007480aac31001185ecef",
        "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-03-04T21:20:02.979Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e008780aac31001185ed05",
        "user": "58e007480aac31001185ecef",
        "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-03-29T20:20:03.844Z",
        "used": false
    }
]

var catList = document.getElementById("list")

for (var i = 0; i < catFacts.length; i++) {
    catList.innerHTML += "<li>" + catFacts[i] + "</li>"
}
