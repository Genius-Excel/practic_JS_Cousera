var my_object = {
    first_name: "Genius",
    last_name: "Excel",
    hobby: "Programming",
    city: "Unknown",
    country: "Unknown"
};

console.log(my_object);

console.log(my_object.first_name);

console.log("-------Changing Object last_name attribute-----");

var new_name;
new_name = "Favour";

my_object.last_name = new_name;

console.log(my_object.last_name);

console.log("----Adding a new property attribute to the Object. -----");

my_object.new_attr = "A new attribute";

console.log(my_object);