import { memo, useLayoutEffect, useCallback, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { scrollTop } from "../../store/cache";
import {
    Header,
    InfiniteScroll,
    Card,
    CardGrid,
    Error,
} from "../../components";
import { GET_CHARACTERS, Characters } from "../../store/query/get-characters";
import styles from "./home.module.scss";

const HomePage = memo(function HomePage() {
    const page = useRef(1);
    const [
        getPage,
        { fetchMore, loading, error, data },
    ] = useLazyQuery<Characters>(GET_CHARACTERS);
    const loadRequest = useCallback(() => {
        if (loading) return;
        page.current = data ? data.characters.info.next : page.current;
        const options = { variables: { page: page.current } };
        if (!fetchMore && page.current) {
            getPage(options);
        } else if (fetchMore && page.current) {
            fetchMore(options);
        }
    }, [getPage, fetchMore, loading, data]);

    useLayoutEffect(() => {
        !loading && data && window.scrollTo(0, scrollTop());
    }, [data, loading]);

    useLayoutEffect(() => {
        const scrollListener = () => scrollTop(window.scrollY);
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    const isEnd = data ? !Boolean(data.characters.info.next) : false;
    return (
        <div className={styles.main}>
            <Header />
            <main>
                <InfiniteScroll onLoadRequest={loadRequest} isEnd={isEnd}>
                    {error ? (
                        <Error message={error.message} />
                    ) : !loading && data ? (
                        <CardGrid>
                            {data.characters.results.map((character) => (
                                <Link
                                    key={character.id}
                                    to={`/character/${character.id}`}
                                >
                                    <Card {...character} />
                                </Link>
                            ))}
                        </CardGrid>
                    ) : null}
                </InfiniteScroll>
            </main>
        </div>
    );
});

export { HomePage };
