module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    collectFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A gambler not only will lose what he has, but also will lose what he doesnt have.', 'A lifetime of happiness lies ahead of you.', 'A new perspective will come with the new year.', 'A truly rich life contains love and art in abundance.'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addToView: (req, res) => {
        const movieArr = ['The Hangover 1-3', 'Get Out', 'Avengers: Endgame', 'Harry Potter series'];

        res.status(200).send(movieArr);
    },
}