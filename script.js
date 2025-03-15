const facts = [
    "The moon has moonquakes!",
    "Cats have five toes on their front paws, but only four on the back.",
    "A group of flamingos is called a ‘flamboyance.’",
    "Water can boil and freeze at the same time.",
    "Wombat poop is cube-shaped!",
    "The tilt of Earth's axis is responsible for the changing seasons.",
    "The Andes mountain range is the longest mountain range in the world.",
    "Earth is approximately 4.5 billion years old.",
    "Earth has one natural satellite, the Moon.",
    "Cats are crepuscular, which means they are most active during dawn and dusk.",
            "A cat's nose print is unique, just like a human fingerprint.",
            "Cats can jump up to six times their height.",
            "The average cat sleeps for about 12-16 hours a day.",
            "Cats have a third eyelid, called a nictitating membrane, that helps protect their eyes.",
            "A group of cats is called a clowder.",
            "Cats can make over 100 different vocalizations, while dogs can only make about 10.",
            "The oldest known cat lived to be 38 years old."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex]; // Fix ID reference
});
