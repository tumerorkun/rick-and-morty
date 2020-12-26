import { InMemoryCache } from "@apollo/client";
import { Characters } from "./query/get-characters";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                characters: {
                    keyArgs: false,
                    merge(
                        existing: Characters["characters"],
                        incoming: Characters["characters"],
                        { args }
                    ) {
                        const page = args?.page ?? 1;
                        const results = existing?.results
                            ? existing.results.slice(0)
                            : [];
                        incoming.results.forEach(
                            (child, i) => (results[page * 20 + i] = child)
                        );
                        return { info: incoming.info, results };
                    },
                },
            },
        },
    },
});

const scrollTop = cache.makeVar<number>(0);

export { cache, scrollTop };
