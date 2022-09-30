import Navbar from "./layout/navbar/Navbar";
import CoinListTable from "./pages/home/CoinListTable";
import Hero from "./pages/home/Hero";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<CoinListTable />
		</>
	);
}

export default App;
