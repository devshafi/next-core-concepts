import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <div>
            <h1 className={styles.title}>
                <span>Next.Js</span> News
            </h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptates!</p>
        </div>
    )
}
