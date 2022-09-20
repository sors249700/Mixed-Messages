const Randomize = () => {
    //  ingredients
    let main = ['noodles', 'rice', 'fries', 'spaghetti', 'dumplings', 'potatoes', ];
    let garnish = ['sausage', 'steak', 'beans', 'peas', 'spinach', 'fish', 'chicken', 'eggs', 'broccoli', ];
    let sauce = ['gravy', 'cream sauce', 'curry sauce', 'barbecue sauce', 'ketchup', 'mayonnaise', ];

    // make my ingredients random.
    let randomMain = Math.floor(Math.random() * main.length);
    let randomGarnish = Math.floor(Math.random() * garnish.length);
    let randomSauce = Math.floor(Math.random() * sauce.length);

    //outputs the random end result to the console 
    let output = [];
    output.push('Todays menu consists of ' + main[randomMain] + ' with ' + garnish[randomGarnish] + ' and ' +
        sauce[randomSauce]);
    return output
};

console.log(Randomize());