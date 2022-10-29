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
                <li 
                class="${task.done ? " list__taskDone" : ""}"
                >
                <button class="js-remove">Usuń</button>
                    ${task.content}
                </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButtons, index) => {
        removeButtons.addEventListener("click" , () => {
           removeTask(index);
        });
        });
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index , 1);
        render();
    };

    const onFromSubmit = (event) => {
        event.preventDefault();


        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFromSubmit);

    };


    init();
}