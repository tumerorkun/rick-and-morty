import { gql } from "@apollo/client";

export type Characters = {
    characters: {
        info: {
            count: number;
            next: number;
        };
        results: Array<{
            id: string;
            image: string;
            name: string;
            status: "Alive" | "Dead" | "unknown";
            species: string;
        }>;
    };
};
export const GET_CHARACTERS = gql`
    query Characters($page: Int!) {
        characters(page: $page) {
            info {
                count
                next
            }
            results {
                id
                image
                name
                status
                species
            }
        }
    }
`;
