import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/luizotav10.png" />

          <div className={styles.authorInfo}>
            <strong>luizotav10</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Hello guys 👋</p>
        <p>I'm learning about ReactJS and I create this page to improve my knowledge about this tecnology. Impressed with the time and code optimization using ReactJS</p>
        <p>
          <a href="">#WebDeveloper</a>{' '}
          <a href="">#ReactJS</a>{' '}
          <a href="">#Optimization</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
