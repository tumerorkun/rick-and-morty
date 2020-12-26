import { gql } from "@apollo/client";

export type Character = {
    character: {
        id: string;
        name: string;
        image: string;
        species: string;
        status: "Alive" | "Dead" | "unknown";
        origin: {
            id: string;
            name: string;
            type: string;
            dimension: string;
        };
        episode: Array<{
            id: string;
            name: string;
            episode: string;
        }>;
    };
};

export const GET_CHARACTER = gql`
    query Character($id: ID!) {
        character(id: $id) {
            id
            name
            image
            status
            species
            origin {
                id
                name
                type
                dimension
            }
            episode {
                id
                name
                episode
            }
        }
    }
`;
