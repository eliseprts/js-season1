const computer = {
    id: "0001",
    available: false,
    user: "leny",
    os: "macOS"
};
const defaultProps = {
    available: true,
    os: "linux",
    user: null,
};
const updateComputer = { ...defaultProps, ...computer };
console.log(updateComputer);