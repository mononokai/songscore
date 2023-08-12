import Image from 'next/image';
import { CustomButton } from './components/Button'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CustomButton innerText="Push me"/>
        </main>
    );
}
