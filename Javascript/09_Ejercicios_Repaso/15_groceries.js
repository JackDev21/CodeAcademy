function groceries(items) {
    // Si no hay elementos en el array, devuelve una cadena vacía
    if (items.length === 0) {
        return '';
    }
    // Si hay un solo elemento en el array, devuelve ese elemento
    else if (items.length === 1) {
        return items[0].item;
    }
    // Si hay dos elementos en el array, devuelve ambos con la palabra 'and' entre ellos
    else if (items.length === 2) {
        return `${items[0].item} and ${items[1].item}`;
    }
    // Para más de dos elementos en el array
    else {
        // Extrae solo los nombres de los artículos en un nuevo array
        const itemsArray = items.map(item => item.item);
        // Toma los dos últimos elementos, los une con 'and' como separador
        const lastTwoItems = itemsArray.slice(-2).join(' and ');
        // Toma todos los elementos menos los dos últimos, los une con comas como separadores
        const remainingItems = itemsArray.slice(0, -2).join(', ');
        // Combina los elementos anteriores con una coma y espacio entre los grupos y el 'and' para los últimos dos
        return `${remainingItems}, ${lastTwoItems}`;
    }
}
