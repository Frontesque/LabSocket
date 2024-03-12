/*
This core function turns the following strings:
    Artificial_ (76561198167038756@steam)
    Front (front@northwood)
    alleyes (alleyes@northwood)
    Quirkleton Fizzlewhiz (76561198180318705@steam)
And seperates them into a username and ID object:
    { name: 'Front', id: 'front@northwood' }
*/

function reverse(str) {
    return str.split('').reverse().join('');
}

// This weird reversing method is used to parse the string in reverse, as some steam users can include parenthesis in their usernames.
module.exports = (player_string) => {
    const data = {
        name: reverse(reverse(player_string).split('(')[1].trim()),
        id:   reverse(reverse(player_string).split('(')[0].trim()),
    }
    return data;
}