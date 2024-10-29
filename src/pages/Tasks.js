import TaskCard from "../components/tasks/TaskCard";

const Tasks = () => {
    return (
        <div className="page-content">
            <TaskCard
                category="User story"
                name={"Find a remote job"}
                description={"We're gonna roll in moneeeey"}
                assignees={[{
                    name: 'Artir Guri',
                    mail: 'xxx',
                    phone: '...'
                }, {
                    name: 'Guy Luong',
                    mail: 'xxx',
                    phone: '...'
                }]}
                subtasks={["test", "test2"]}
                priority={'urgent'}
            />
        </div>
    );
}

export default Tasks;