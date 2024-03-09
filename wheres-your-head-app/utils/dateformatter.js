function dateFormatter(dateTimeString) {
    if (!dateTimeString) return '';
    const date = new Date(dateTimeString);
    return date.toISOString().replace('T', ' ').slice(0, 19);
}

module.exports = dateFormatter;