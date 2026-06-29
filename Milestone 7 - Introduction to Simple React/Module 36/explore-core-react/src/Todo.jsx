// export default function ToDo({task, isDone}) {
//     return (
//         <ul>
//             <li>Task: {task}</li>
//         </ul>
//     )
// }

// export default function ToDo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     } else {
//         return <li>Do now: {task}</li>
//     }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//     if (isDone === true) {
//         return <li>Done: {task}; Duration: {time}</li>
//     }

//     return <li>To be done: {task}; Duration: {time}</li>
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone ?
//         <li>Done: {task} Time: {time}</li> :
//         <li>Not done: {task} Time: {time}</li>
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone && <li>Done Task: {task}; Time: {time}</li>

// }

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not done Task: {task}; Time: {time}</li>

// }

export default function ToDo({ task, isDone, time = 0}) {
    const displayTime = time? time : 100;
    let listItem;

    if (isDone === true) {
        listItem = <li>Done: {task}; Time: {time? "I am done." : "Not done yet."}</li>
    } else {
        listItem = <li>Do now: {task}</li>
    }

    return listItem;
}