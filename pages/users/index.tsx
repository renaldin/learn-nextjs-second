import Layout from "../../components/Layout";
import { useRouter } from 'next/router';
import styles from '../../styles/Users.module.css';

interface UsersProps {
    dataUsers: Array<any>;
}

const Users = (props: UsersProps) => {
    const { dataUsers } = props;
    const router = useRouter();

    return (
        <Layout pageTitle="Users Page">
            {dataUsers.map((user) => (
                <>
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </>
            ))
            }
        </Layout >
    )
}

export default Users;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers: dataUsers,
        }
    }
}
