module.exports = async (time) => {
    return await new Promise(r => setTimeout(r, time));
}