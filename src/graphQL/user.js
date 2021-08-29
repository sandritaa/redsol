import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const getUser = () => {
    const { result, loading, error } = useQuery(gql`
        query getUser {
            user(id: 1) {
                id
                username
                email
            }
        }
    `);

    const user = useResult(result);

    return { user, loading, error };
};
