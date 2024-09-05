let trainints = [
    {
        date: "2024-09-05",
        title: "Morning Run - 5km",
        type: "Physical",
        duration: 14,
        instructor: "Sgt. Johnson",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque et neque distinctio perferendis! Placeat vel eum, consectetur eos dolore optio, culpa, quidem exercitationem laboriosam reiciendis qui impedit reprehenderit.",
        equipment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        date: "2024-09-06",
        title: "Urban Combat Training",
        type: "Tactical",
        duration: 12,
        instructor: "Sgt. Johnson",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque et neque distinctio perferendis! Placeat vel eum, consectetur eos dolore optio, culpa, quidem exercitationem laboriosam reiciendis qui impedit reprehenderit.",
        equipment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        date: "2024-09-07",
        title: "Radio Communications",
        type: "Technical",
        duration: 18,
        instructor: "Sgt. Johnson",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque et neque distinctio perferendis! Placeat vel eum, consectetur eos dolore optio, culpa, quidem exercitationem laboriosam reiciendis qui impedit reprehenderit.",
        equipment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        date: "2024-09-08",
        title: "Training Schedule",
        type: "Physical",
        duration: 9,
        instructor: "Sgt. Johnson",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae itaque et neque distinctio perferendis! Placeat vel eum, consectetur eos dolore optio, culpa, quidem exercitationem laboriosam reiciendis qui impedit reprehenderit.",
        equipment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];


console.log(localStorage["training"]);

let training = trainints.find((training) => training.title === localStorage["training"]);
console.log(training);

document.querySelector("#date").innerHTML = training.date;
document.querySelector("#title").innerHTML = training.title;
document.querySelector("#title2").innerHTML = training.title;
document.querySelector("#instructor").innerHTML = training.instructor;
document.querySelector("#description").innerHTML = training.description;
document.querySelector("#duration").innerHTML = training.duration;
document.querySelector("#equipment").innerHTML = training.equipment;
