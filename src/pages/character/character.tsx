import { useMemo, memo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import classnames from "classnames";
import { getLastFive } from "../../utils";
import { Logo, Header, Photo, Error } from "../../components";
import { GET_CHARACTER, Character } from "../../store/query/get-character";
import homeStyles from "../home/home.module.scss";
import styles from "./character.module.scss";

const CharacterPage = memo(function CharacterPage() {
    const { characterId } = useParams<{ characterId: string }>();
    const { loading, error, data } = useQuery<Character>(GET_CHARACTER, {
        variables: { id: characterId },
    });
    const lastFiveEpisode = useMemo(
        () => (data ? getLastFive(data.character.episode) : []),
        [data]
    );
    return (
        <div>
            <Header backButton />
            <main className={styles.main}>
                {error ? (
                    <Error message={error.message} />
                ) : !loading && data ? (
                    <section className={styles.passport}>
                        <Photo
                            className={styles.avatar}
                            src={data.character.image}
                            alt={`The Rick and Morty character, ${data.character.name}`}
                        />
                        <article>
                            <fieldset>
                                <legend>Name</legend>
                                <h2>{data.character.name}</h2>
                            </fieldset>
                            <fieldset>
                                <legend>Status - Species</legend>
                                <span
                                    className={classnames(
                                        homeStyles.status,
                                        homeStyles[data.character.status]
                                    )}
                                />{" "}
                                <span>
                                    {data.character.status} -{" "}
                                    {data.character.species}
                                </span>
                            </fieldset>
                            <fieldset>
                                <legend>Origin</legend>
                                <article>
                                    {data.character.origin.type ? (
                                        <p>
                                            Type: {data.character.origin.type}
                                        </p>
                                    ) : null}
                                    {data.character.origin.name ? (
                                        <p>
                                            Name: {data.character.origin.name}
                                        </p>
                                    ) : null}
                                    {data.character.origin.dimension ? (
                                        <p>
                                            Dimension:{" "}
                                            {data.character.origin.dimension}
                                        </p>
                                    ) : null}
                                </article>
                            </fieldset>

                            <fieldset>
                                <legend>
                                    Last Five Episodes{" "}
                                    <small>(if there is)</small>
                                </legend>
                                <ul>
                                    {lastFiveEpisode.map((episode) => (
                                        <li key={episode.id}>
                                            {episode.name} - {episode.episode}
                                        </li>
                                    ))}
                                </ul>
                            </fieldset>
                        </article>
                    </section>
                ) : (
                    <Logo className={homeStyles.loader} />
                )}
            </main>
        </div>
    );
});

export { CharacterPage };
