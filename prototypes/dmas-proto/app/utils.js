const tags = ["Wales Priority", "Brexit", "NI Protocol", "Asia Pacific Pilot", "Programme Fund", "International Standards", "Clean Growth"]
const status = ["Open", "Resolved: In Part", "Resolved: In Full", "Dormant"]
const countries = ["Antigua and Barbuda", "Belgium", "China", "Guatemala", "Sudan", "United Kingdom", "United States of America", "Zimbabwe"]


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function generate_list_of_barriers() {
    let no_of_barriers = Math.floor(Math.random() * 11);
    var barriers = []
    for (let i = no_of_barriers; i < 100; i++) {
        barriers.push({
            name: makeid(4),
            date_reported: new Date(new Date() - Math.random() * (1e+12)),
            last_updated: new Date(new Date() - Math.random() * (1e+12)),
            location: countries[Math.floor(Math.random() * countries.length)],
            status: status[Math.floor(Math.random() * status.length)],
            tags: tags[Math.floor(Math.random() * status.length)],
        })
    }
}

module.export = {
    generate_list_of_barriers
}