import PromotionLayout from '@/layouts/PromotionLayout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<PromotionLayout>
			<Component {...pageProps} />
		</PromotionLayout>
	);
}
