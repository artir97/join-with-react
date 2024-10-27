import {useState} from "react";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
      <>
        <div className="container-add-task">
            <form className="add-task-form">
                <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="title-input"
                    type="text"
                    placeholder="Enter a title"
                />

                <label htmlFor="description-input"><b>Description </b>(optional)</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a Description"
                    className="description-input"
                    id="description-input"
                />
            </form>
        </div>
      </>
    );
}

export default AddTask