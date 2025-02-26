const students=[
    {
        Name: 'Daniel',
        IDNum: 12345,
        Year: 2020,
        Grade: 93,
    },
    {
        Name: "Nino",
        IDNum: 232323,
        Year: 2019,
        Grade: 91,
    },
    {
        Name: "Mae",
        IDNum: 61616,
        Year: 2021,
        Grade: 87,
    },
    {
        Name: "Bale",
        IDNum: 84934,
        Year: 2024,
        Grade: 89,
    },
    {
        Name: "Nichole",
        IDNum: 54783,
        Year: 2022,
        Grade: 86,
    },
    {
        Name: "Pia",
        IDNum: 83945,
        Year: 2021,
        Grade: 90,
    },
    {
        Name: "Steve",
        IDNum: 12324,
        Year: 2025,
        Grade: 91,
    },
    {
        Name: "Khent",
        IDNum: 51923,
        Year: 2023,
        Grade: 88,
    },
    {
        Name: "Ben",
        IDNum: 74859,
        Year: 2021,
        Grade: 87,
    },
    {
        Name: "Lash",
        IDNum: 62538,
        Year: 2021,
        Grade: 91,
    }
];

function getLowestHighest(students){
    let high = students[0];
    let low = students[0];

    for(let i = 0; i < 10; i++){
        if(students[i].Grade > high.Grade){
            high = students[i];
        }
        if(students[i].Grade < low.Grade){
            low = students[i];
        }
    }
    console.log("Highest Student: ");
    console.log(high);
    console.log("Lowest Student: ");
    console.log(low);
}

getLowestHighest(students);
