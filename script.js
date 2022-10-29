{
    const tasks = [
        {
            content: "Zrobić pracę domową",
            done: false,
        },
        {
            content: "Zjeść obiad",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="${task.done ? " list__taskDone" : ""}">
                    ${task.content}
                </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }



    const init = () => {
        render();
    };

    init();
}