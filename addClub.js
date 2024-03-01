const Club = require('./models/Club.js');

const newClub = new Club({
  name: 'Downtown Ping Pong',
  city: 'New York',
  state: 'NY',
  description: 'A friendly place for competitive and amateur players.',
  members: [] // Initially, this might be empty or you can add player IDs here
});

newClub.save()
  .then(() => console.log('Club saved successfully!'))
  .catch(error => console.error('Error saving club:', error));
