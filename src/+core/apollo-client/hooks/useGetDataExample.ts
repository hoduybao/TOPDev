import { useQuery, gql } from '@apollo/client';

interface Location {
  id: string;
  name: string;
  description: string;
  photo: string;
}

interface GetLocationsData {
  locations: Location[];
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const useGetLocationsData = () => {
  const { loading, error, data } = useQuery<GetLocationsData>(GET_LOCATIONS);

  return {
    loading,
    error,
    locations: data?.locations,
  };
};

export default useGetLocationsData;
