import { findIndex, each, flattenDeep } from "lodash";

export const insertUuidIntoState = (state, uuid, dropTargetId, insertInChildren) => {
    if (dropTargetId == undefined) {
        state[0].children.push(uuid);
        return state;
    }

    if(uuid == dropTargetId) {
        return state
    }

    let index;
    if (insertInChildren) {
        index = findIndex(state, (component) => { return component.Uuid == dropTargetId; });
        const newChildren = state[index].children ? [uuid, ...state[index].children] : [uuid];
        state[index].children = newChildren;
    } else {
        let indexInChildren;
        index = findIndex(state, (component) => {
            indexInChildren = findIndex(component.children, (child) => {
                console.log(child, child == dropTargetId);
                return child == dropTargetId;
            });
            console.log(indexInChildren);
            return indexInChildren > -1;
        });
        state[index].children.splice(indexInChildren + 1, 0, uuid);
    }

    return state
}

export const insertingIntoDescendant = (sourceId, targetId, state) => {
    // TODO (spefley): store this info in thing to start with?
    // sourceId in children of targetId
    let children = state[state.findIndex((el) => el.Uuid == sourceId)].children;
    const treeList = insertIntoDescendantRecur(targetId, state, children);
    var result = flattenDeep(treeList).some((el) => el);
    return flattenDeep(treeList).some((el) => el);
}

const insertIntoDescendantRecur = (targetId, state, children) => {
    if (children) {
        const indexOfTarget = children.findIndex((id) => id == targetId);
        if (indexOfTarget > -1) {
            return [true];
        } else {
            return children.map((childId) => insertIntoDescendantRecur(targetId, state, state[state.findIndex((el) => el.Uuid == childId)].children));
        }
    }
    return [false];
}