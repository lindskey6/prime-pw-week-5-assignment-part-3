console.log('***** Music Collection *****')
//object: Albums

var Collection = [];

// Add to the Collection <-----
function addToCollection(title, artist, year){
    const albums = {
        title: title,
        artist: artist,
        year: year,
    }
    albums.title = title; 
    albums.artist = artist;
    albums.year = year
    Collection.push(albums)
    return albums; // Returns the items by title, Artist, Year.
};

//***** ----- ADD ALBUMS TO COLLECTION ----- ***** //
console.log(addToCollection('Turn the Light On', 'Imminence', 2019)); // 1
console.log(addToCollection('Semipternal', 'Bring Me The Horizon', 2013)); // 2
console.log(addToCollection('Truama', 'I Prevail', 2019)); // 3
console.log(addToCollection('Disgusting', 'Beartooth', 2014)); // 4
console.log(addToCollection('A Flair For The Dramatic', ' Pierce The Veil', 2008)); // 5
console.log(addToCollection('Palisades', 'Palisades', 2017 )); // 6
console.log('THIS SHOULD SHOW ENTIRE COLLECTION AFTER "addToCollection"',Collection);

//***** ----- ALBUMS ----- ***** //
// T: Turn the Light On         // A: Imminence             // Y: 2019 // 0
// T: Sempiternal               // A: Bring Me The Horizon  // Y: 2013 // 1
// T: Truama                    // A: I Prevail             // Y: 2019 // 2 
// T: Disgusting                // A: Beartooth             // Y: 2014 // 3
// T: A Flair For The Dramatic  // A: Pierce The Veil       // Y: 2008 // 4
// T: Palisades                 // A: Palisades             // Y: 2017 // 5


// Show the Collection <-----
function showCollection(){
    for(let i=0; i < Collection.length; i++) {
        return Collection; // Returns the items in the Collection's Array
    }
}
console.log("THIS SHOWS THE COLLECTION", showCollection());

// Find Aritst in the Collection <-----


function findByArtist(artist) {
    var artist = [];
    for(let i = 0; i < Collection.length; i++) 
        if (artist = Collection){
        return artist;
        } 
}
console.log("Artist:", findByArtist('Bring Me The Horizon'));

console.log(Collection[1]);