export default function ListView({ places }: any) {
  return (
    <ul className="space-y-2">
      {places.map((place: any, index: number) => (
        <li key={index} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{place.name}</h2>
          <p className="text-gray-600">{place.address}</p>
          <p className="text-gray-500 text-sm">{place.city} {place.ZIP} · {place.type}</p>
        </li>
      ))}
    </ul>
  );
}
