
// Never write what you can say
// Never say what you can wink

var Classroom = new Classroom();

var andrew = new Person('Andrew', 0.7);
var bob = new Person('Bob', 0.5);
var charlie = new Person('Charlie', 0.8);

Classroom.enroll(andrew);
Classroom.enroll(bob);
Classroom.enroll(charlie);

Classroom.emotions.setFeelingFromTo(andrew, charlie, 0.8);
Classroom.emotions.setFeelingFromTo(charlie, andrew, 0.4);
Classroom.emotions.setFeelingFromTo(andrew, bob, 0.9);
Classroom.emotions.setFeelingFromTo(bob, andrew, 0.9);
Classroom.emotions.setFeelingFromTo(charlie, bob, 0.4);
Classroom.emotions.setFeelingFromTo(bob, charlie, 0.5);

var dave = new Person('Dave', 1);
Classroom.enroll(dave);


"charlie is an extrovert",
"dave hates bob",
"bob loves justine",
"bob sucks" // extroversion -1;
"andrew's clique sucks"

var message = {
    from: 'andrew',
    to: 'bob',

    targetType: 'indivudual'
    target: 'andrew',
    value: -1 // andrew sux
}

message = {
    from: 'andrew',
    to: 'bob',

    targetType: 'edge',
    target: {
        from: 'andrew',
        to: 'bob'
    }
    value: -1 // andrew hates bob
}

message = {
    from: 'andrew',
    to: 'bob',

    targetType: 'clique',
    target: 'charlie',
    value: -1 // Team charlie sux
}

assertToRecipients(message, recipients);
assertTo

// When message is in alignment with
//   affinitiy of recipient to target
//   recipient affinity to messanger goes up

//  I say "Bob the Bully sucks!" -> Whiney Willie loves me



// Building your affinity network by stating your own


// Extroversion
// Coolness



Classroom.getStudent
