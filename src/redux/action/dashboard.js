export const saveBookmark = (value) => {
    return {type:'MARKED',value}
}

export const unmark = (value) => {
    return {type:'UNMARKED',value}
}