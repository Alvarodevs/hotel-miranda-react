export const handleShow = (path) => {
    if (path.includes("room")) {
        return "flex";
    } else if (path.includes("booking")) {
        return "flex";
    } else if (path.includes("user")) {
        return "flex";
    } else if (path.includes("guest")) {
        return "flex";
    } else if (path.includes("dashboard")) {
        return "flex";
    } else if (path.includes("contact")) {
        return "flex";
    } else if (path.includes("concierge")) {
        return "flex";
    } else return "none";
};