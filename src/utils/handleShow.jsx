export const handleShow = (path) => {
    if (path.includes("login")) {
        return "none";
    } else return "flex";
};