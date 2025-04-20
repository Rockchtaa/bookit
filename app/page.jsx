import data from "../data/rooms.json";

export default function Home() {
  return ( <>
      {data.length > 0 ? ( 
        data.map((room) => <h2>{room.name}</h2> )
      ) : (
          <h2>No rooms available</h2>
      )}
    </>
  );
}