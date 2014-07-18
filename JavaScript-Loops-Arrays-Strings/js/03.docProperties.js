function displayProperties() {
    var docProperties = [];
    var property;

    for (property in document) {
        docProperties.push(property);
    }

    docProperties.sort();
    console.info(docProperties.join('\n'));
}

displayProperties();