const status = ['To do', 'In progress', 'Awaiting feedback', 'Done'];

export const getStatusIndex = (name) => {
    let index = status.indexOf(name);
    return (index === -1) ? 0 : index;
}
export const getStatusFromIndex = (index) => {
    console.log("Index", typeof index, index);
    switch (Number(index)) {
        case 0: case 1: case 2: case 3: return status[index];
        default: return status[0];
    }
}

export const getStatusList = () => {
    return [...status];
}

