import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql, useMutation } from "@apollo/client";

import Details from "../components/breedDetailsComponents/Details";
import Photos from "../components/breedDetailsComponents/Photos";
import LoadingBar from "../components/LoadingBar";
import ErrorMsg from "../components/ErrorMsg";

const Wrapper = styled.div``;

const BreedDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(BREED_IMAGES, {
    variables: { catId: id },
  });
  const imageId = data?.getBreedWithImgUrls?.breed?.reference_image_id;
  const { loading: imgLoading, data: imageData } = useQuery(MAIN_IMAGE, {
    skip: !imageId,
    variables: { imageId },
  });

  const [addCatVisit, { called: visitCalled }] = useMutation(ADD_CAT_VISIT);

  useEffect(() => {
    if (!loading && !imgLoading && imageData && data && !visitCalled) {
      addCatVisit({
        variables: {
          addCatVisitName: data.getBreedWithImgUrls.breed.name,
          addCatVisitBreedId: data.getBreedWithImgUrls.breed.id,
          addCatVisitImgId: data.getBreedWithImgUrls.breed.reference_image_id,
        },
      });
    }
  }, [loading, imgLoading, imageData, data, visitCalled, addCatVisit]);

  if (loading || imgLoading) return <LoadingBar />;
  if (error || !data.getBreedWithImgUrls.success)
    return <ErrorMsg message={`Ooops, unknown error.`} />;

  return (
    <Wrapper>
      <Details
        breed={data.getBreedWithImgUrls.breed}
        img={imageData?.getImageUrl?.url}
      />
      <Photos images={data.getBreedWithImgUrls.imagesUrls} />
    </Wrapper>
  );
};

export default BreedDetails;

const BREED_IMAGES = gql`
  query Query($catId: String!) {
    getBreedWithImgUrls(id: $catId) {
      success
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

const MAIN_IMAGE = gql`
  query Query($imageId: String!) {
    getImageUrl(id: $imageId) {
      id
      url
    }
  }
`;

const ADD_CAT_VISIT = gql`
  mutation Mutation(
    $addCatVisitName: String!
    $addCatVisitBreedId: String!
    $addCatVisitImgId: String!
  ) {
    addCatVisit(
      name: $addCatVisitName
      breedId: $addCatVisitBreedId
      imgId: $addCatVisitImgId
    ) {
      breedId
      visited
    }
  }
`;
