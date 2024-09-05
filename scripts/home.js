let trainints = [
    {
        date: "2024-09-05",
        title: "Morning Run - 5km",
        type: "Physical",
        instructor: "Sgt. Johnson",
    },
    {
        date: "2024-09-06",
        title: "Urban Combat Training",
        type: "Tactical",
        instructor: "Sgt. Johnson",
    },
    {
        date: "2024-09-07",
        title: "Radio Communications",
        type: "Technical",
        instructor: "Sgt. Johnson",
    },
    {
        date: "2024-09-08",
        title: "Training Schedule",
        type: "Physical",
        instructor: "Sgt. Johnson",
    },
];
const container = document.querySelector("#trainings");

trainints.forEach((training) => {
    let newTr = document.createElement("div");
    newTr.classList.add("training-unit");

    let textDiv = document.createElement("div");
    textDiv.classList.add("training-text");
    newTr.appendChild(textDiv);

    let data = document.createElement("a");
    data.href = "#";
    data.innerText = `
    ${training.date}
    ${training.title}
    `;
    textDiv.appendChild(data);

    let instructor = document.createElement("p");
    instructor.innerText = training.instructor;
    textDiv.appendChild(instructor);

    let type = document.createElement("p");
    type.innerText = training.type;
    if (training.type === "Physical") {
        type.classList.add("type-physical");
    } else if (training.type === "Tactical") {
        type.classList.add("type-tactical");
    } else if (training.type === "Technical") {
        type.classList.add("type-technical");
    }
    type.classList.add("type-training");
    newTr.appendChild(type);

    container.appendChild(newTr);
});

