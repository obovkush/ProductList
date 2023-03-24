import Head from 'next/head';
import NavBar from '../components/UI/NavBar/NavBar';

const PageContainer = ({ children, tags, title = 'Главная страница' }) => {
	return (
		<>
			<Head>
				<meta keywords={'productlist, obovkush' + ', ' + tags}></meta>
				<title>{title}</title>
			</Head>
			<NavBar />
			<div className="pageContainer">{children}</div>
		</>
	);
};

export default PageContainer;
