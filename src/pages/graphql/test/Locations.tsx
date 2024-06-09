import useGetLocationsData from '@/+core/apollo-client/hooks/useGetDataExample';

const Locations = () => {
  const { loading, error, locations } = useGetLocationsData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return locations?.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width='400' height='250' alt='location-reference' src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};

export default Locations;
