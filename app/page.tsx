import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { CustomButton } from './components/Button'

export default function Home() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <CustomButton innerText="Push me"/>
            </main>
        </>
    );
}
