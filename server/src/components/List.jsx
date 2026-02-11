import ListItem from './ListItem.jsx';

export default function List({ people }) {
  //difference between putting export here vs bottom?
  //console.log('people ', people);
  let peopleList = people.map((person, id) => {
    return (
      <ListItem
        person={person}
        key={id}
      />
    );
  });
  // console.log('peopleList', peopleList);
  return <div className='list'>{peopleList}</div>;
}
