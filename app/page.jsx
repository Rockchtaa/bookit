import { redirect } from 'next/navigation';
import CardContent from "@/Components/CardContent";
import Heading from "@/Components/Heading";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  const data = await getAllRooms();

  if (!data) {
    redirect('/error');
  }

  return (
    <>
      <Heading title="Available Rooms" />
      {data.length > 0 ? (
        data.map((room) => <CardContent room={room} key={room.$id} />)
      ) : (
        <h2>No rooms available</h2>
      )}
    </>
  );
}
