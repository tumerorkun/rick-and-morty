import { memo } from "react";
import styles from "./card.module.scss";
import { Characters } from "../../store/query/get-characters";
import classnames from "classnames";
import { Photo } from "../";

const Card = memo(function Card(
    character: Characters["characters"]["results"][number]
) {
    return (
        <article className={styles.card} title={character.name}>
            <Photo
                src={character.image}
                alt={`The Rick and Morty character, ${character.name}`}
            />
            <section>
                <h2>{character.name}</h2>
                <span>
                    <span
                        className={classnames(
                            styles.status,
                            styles[character.status]
                        )}
                    />
                    {character.status} - {character.species}
                </span>
            </section>
        </article>
    );
});

export { Card };
