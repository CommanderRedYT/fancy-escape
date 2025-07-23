import escape from 'fancy-escape';

if (!escape) {
    throw new Error('escape not found');
}

if (typeof escape !== 'function') {
    throw new Error('escape is not a function');
}
