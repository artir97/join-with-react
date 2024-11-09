const addTagColor = (name, color) => {
    dispatch({
        type: "added",
        name, color
    });
}

...
function tagReducer(data, action) {
    switch (action.type) {
        case "added": {
            data.tags.set(action.name, action.color)
            return { ...data, tags: new Map(data.tags) };
        }