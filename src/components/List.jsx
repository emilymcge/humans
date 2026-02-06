import ListItem from './ListItem.jsx';

export default function List({ people }) {
  //difference between putting export here vs bottom?
  //console.log('people ', people);
  let peopleList = people.map((person) => {
    return <ListItem person={person} />;
  });
  // console.log('peopleList', peopleList);
  return <div className='list'>{peopleList}</div>;
}
