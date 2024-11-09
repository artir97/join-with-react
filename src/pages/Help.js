import { Link } from "react-router-dom";
import { Heading, Section, Text } from "../components/text/StylizedText";

const howToList = [
    <>
        <Heading>Exploring the Board</Heading>
        <Text>When you log in to <Link to="/summary" className="text-blue-500">Join</Link>, you'll find a default board. This board represents your project and contains four default lists: "To Do", "In Progress", “Await feedback” and "Done".</Text>
    </>,
    <>
        <Heading>Creating Contacts</Heading>
        <Text>In <Link to="/summary" className="text-blue-500">Join</Link>, you can add contacts to collaborate on your projects. Go to the "Contacts" section, click on "New contact", and fill in the required information. Once added, these contacts can be assigned tasks and they can interact with the tasks on the board.</Text>
    </>,
    <>
        <Heading>Adding Cards</Heading>
        <Text>Now that you've added your contacts, you can start adding cards. Cards represent individual tasks. Click the "+" button under the appropriate list to create a new card. Fill in the task details in the card, like task name, description, due date, assignees, etc.</Text>
    </>,
    <>
        <Heading>Moving Cards</Heading>
        <Text>As the task moves from one stage to another, you can reflect that on the board by dragging and dropping the card from one list to another.</Text>
    </>,
    <>
        <Heading>Deleting Cards</Heading>
        <Text>
            Once a task is completed, you can either move it to the "Done" list or delete it. Deleting a card will permanently remove it from the board. Please exercise caution when deleting cards, as this action is irreversible.
        </Text>
        <Text>
            Remember that using <Link to="/summary" className="text-blue-500">Join</Link> effectively requires consistent updates from you and your team to ensure the board reflects the current state of your project.
        </Text>
        <Text>
            Have more questions about <Link to="/summary" className="text-blue-500">Join</Link>? Feel free to contact us at [Your Contact Email]. We're here to help you!
        </Text>
    </>
];

const Help = () => {
    return (
        <div className="p-4 lg:p-10 page-content overflow-y-scroll">
            <Section>
                <Heading>Help</Heading>
                <Text>
                    Welcome to the help page for <Link to={"/summary"} className="text-blue-500">Join</Link>, your guide to using our kanban project management tool. Here, we'll provide an overview of what <Link to={"/summary"} className="text-blue-500">Join</Link> is, how it can benefit you, and how to use it.
                </Text>

                <Section>
                    <Heading>What is <Link to={"/summary"}>Join</Link> ?</Heading>
                    <Text>
                        <Link to={"/summary"} className="text-blue-500">Join</Link> is a kanban-based project management tool designed and built by a group of dedicated students as part of their web development bootcamp at the Developer Akademie.
                    </Text>
                    <Text>
                        Kanban, a Japanese term meaning "billboard", is a highly effective method to visualize work, limit work-in-progress, and maximize efficiency (or flow). <Link to={"/summary"} className="text-blue-500">Join</Link> leverages the principles of kanban to help users manage their tasks and projects in an intuitive, visual interface.
                    </Text>
                    <Text>
                        It is important to note that <Link to={"/summary"} className="text-blue-500">Join</Link> is designed as an educational exercise and is not intended for extensive business usage. While we strive to ensure the best possible user experience, we cannot guarantee consistent availability, reliability, accuracy, or other aspects of quality regarding <Link to={"/summary"} className="text-blue-500">Join</Link>.
                    </Text>

                    <Heading>How to use it</Heading>
                    <Text>
                        Here is a step-by-step guide on how to use <Link to={"/summary"} className="text-blue-500">Join</Link>:
                    </Text>

                    <Section>
                        {howToList.map((content, index) => (
                            <div className="flex space-x-4">
                                <p className="text-blue-500 font-bold text-4xl">{index + 1}.</p>
                                <div className="flex-1">{content}</div>
                            </div>
                        ))}
                    </Section>
                    <Heading>Enjoy using Join!</Heading>
                </Section>
            </Section>
        </div>
    );
}

export default Help;