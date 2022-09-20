const Randomize = () => {
    // messages and numbers
    let messages1 = ['noodles', 'rice', 'fries', 'spaghetti', 'dumplings', 'potatoes', ];
    let messages2 = ['sausage', 'steak', 'beans', 'peas', 'spinach', 'fish', 'chicken', 'eggs', 'broccoli', ];
    let messages3 = ['gravy', 'cream sauce', 'curry sauce', 'barbecue sauce', 'ketchup', 'mayonnaise', ];

    // make my message and numbers random.
    let randomMsg1 = Math.floor(Math.random() * messages1.length);
    let randomMsg2 = Math.floor(Math.random() * messages2.length);
    let randomMsg3 = Math.floor(Math.random() * messages3.length);

    //outputs the random end result to the console 
    let output = [];
    output.push('Todays menu consists of ' + messages1[randomMsg1] + ' with ' + messages2[randomMsg2] + ' and ' +
        messages3[randomMsg3]);
    return output
};

console.log(Randomize());