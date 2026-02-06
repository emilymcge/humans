export default function ListItem({ person }) {
  //   console.log('person', person);
  return (
    <div className='list-Item'>
      {person.firstName} {person.lastName}, {person.jobTitle}
    </div>
  );
}
