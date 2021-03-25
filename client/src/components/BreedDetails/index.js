import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

import Details from "./components/Details";
import Photos from "./components/Photos";

const Wrapper = styled.div``;

const BreedDetails = ({ id }) => {
  const { loading, error, data } = useQuery(BREED_IMAGES, {
    variables: { catId: "beng" },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error {error.message}</p>;

  console.log(data);
  return (
    <Wrapper>
      <Details />
      <Photos />
    </Wrapper>
  );
};

export default BreedDetails;

const BREED_IMAGES = gql`
  query Query($catId: String!) {
    getBreedWithImgUrls(id: $catId) {
      breed {
        id
        name
        description
        temperament
        origin
        life_span
        adaptability
        affection_level
        child_friendly
        grooming
        intelligence
        health_issues
        social_needs
        stranger_friendly
        reference_image_id
      }
      imagesUrls {
        url
        id
      }
    }
  }
`;
