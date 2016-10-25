var topics = require('../data').topics;
console.log(topics);

var result = topics.filter(function (topic) { //filter renvoie les 'true'
    return topic.user.name === 'Leonard'; //? true : false;
});

var result2 = topics.filter(topic=>topic.user.name === 'Leonard');

var titles = topics.map(function (topic) {
    return topic.title;
});

var title2 = topics.map(topic=>topic.title);

var hasViolence = topics.some(function (topic) { //renvoie true pour les topics avec violence
    return (topic.tags.includes('violence'));
});

var hasViolence2 = topics.some(topic=>topic.tags.includes('violence'));

console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');
console.log(result);
console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');
console.log(result2);
console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');
console.log(titles);
console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');
console.log(title2);
console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');
console.log('hasViolence ', hasViolence);
console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');

var SheldonCom = topics.filter(function (topic) {
    return (topic.comments.some(function (comment) {
        return comment.user.name === 'Sheldon';
    }));
}).map(function (topic) {
    return (topic.title);
});

var SheldonCom2;
SheldonCom2 = topics.filter(topic=>topic.comments.some(comment=>comment.user.name === 'Sheldon')).map(topic=>topic.title);

console.log('Sheldon has published in ', SheldonCom);
console.log('Sheldon has published in ', SheldonCom2);

console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');

var idCommPenny = [];
topics.forEach(function (topic) {
    topic.comments.forEach(function (comment) {
        if (comment.user.name === 'Penny') {
            idCommPenny.push(comment.id);
        }
    })
});

var sortFunction = (a, b) => a < b ? -1 : 1;
idCommPenny.sort(sortFunction);

console.log('Penny has post in : ', idCommPenny);

console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');

var Content = [];
function getCommentByTag(tag, isAdmin) {
    topics.forEach(function (topic) {
        topic.comments.forEach(function (comment) {
            if (comment.tags !== undefined) {
                if (!comment.user.admin === isAdmin && comment.tags.includes(tag)) {
                    Content.push(comment.content);
                }
            }
        });
    });
    return Content;
};

console.log('Violent tag are present for these non-admin comments : ', getCommentByTag('fun', true));

console.log('_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_/-\\\_');

var searched = [];
function search(term) {
    topics.forEach(function (topic) {
        topic.comments.forEach(function (comment) {
                if (comment.content.toLowerCase().includes(term.toLowerCase())) {
                    searched.push(comment.content);
                }
        })
    });
    return searched;
}

console.log('search is present in :', search('it'));


