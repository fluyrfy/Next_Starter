import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head></Head>
			<div id="indexContainer">
				<Image alt="Kiitzu豈止數位設計" src={'/images/kiitzu.png'} layout="fill" objectFit="cover"></Image>
			</div>
		</>
	);
}
