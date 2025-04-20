import data from "../data/rooms.json";
import CardContent from "@/Components/CardContent";
import Heading from "@/Components/Heading";

export default function Home() {
  return ( <>
      <Heading title="Available Rooms" />
      {data.length > 0 ? ( 
        data.map((room) => <CardContent room={room} key={room.$id} />)
      ) : (
          <h2>No rooms available</h2>
      )}
    </>
  );
}