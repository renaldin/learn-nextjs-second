import { useEffect } from "react"
import { useRouter } from "next/router"

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, [])
    return (
        <div>
            <h1 className="title-not-found">Ooops...</h1>
            <h1 className="title-not-found">Halaman yang Anda cari tidak ditemukan</h1>
        </div>
    )
}

export default Custom404
