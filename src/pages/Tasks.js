import StatusTasks from "../components/tasks/StatusTasks";
import TaskCard from "../components/tasks/TaskCard";

const tasks = [{
    category: "Technical task",
    name: "Find a remote job",
    description: "We're gonna roll in moneeeey",
    assignees: [{
        name: 'Artir Guri',
        mail: 'xxx',
        phone: '...'
    }, {
        name: 'Guy Luong',
        mail: 'xxx',
        phone: '...'
    }],
    subtasks: [{ name: "test", done: false }, { name: "test2", done: true }],
    priority: 'low',
    status: 'In progress'
}];

const Tasks = () => {
    return (
        <div className="page-content overflow-y-scroll">
            <div className="flex flex-col space-y-4">
                <StatusTasks
                    status={'In progress'}
                    tasks={tasks}
                />
                <StatusTasks
                    status={'Awaiting feedback'}
                    tasks={[...tasks, ...tasks, ...tasks]}
                />
                <StatusTasks
                    status={'Done'}
                    tasks={[...tasks, ...tasks]}
                />
            </div>
        </div>
    );
}

export default Tasks;