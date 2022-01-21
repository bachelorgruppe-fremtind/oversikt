import "@fremtind/jkl-core/core.min.css";
import '@fremtind/jkl-button/button.min.css'
import Header from "./components/Header";
import Testamonial from "./components/Testamonial";
import Wrapper from "./components/Wrapper";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import Bits from "./components/Bits";
import Bit from "./components/Bit";
import { Link } from "@fremtind/jkl-core";
import { PrimaryButton } from "@fremtind/jkl-button-react";

function App() {
	return (
		<div style={{backgroundColor: 'var(--snohvit)', minHeight: '100vh'}}>
			<Wrapper>
				<Header />
			</Wrapper>
			<div style={{backgroundColor: 'var(--dis)'}}>
				<Wrapper>
					<Bits>
						<Bit 
							title="Statusrapport"
							description="Status anngående leting etter oppdragsgiver."
						>
							<Link className="jkl-small" href="/assets/Statusrapport okt 2021.pdf" download>Last ned</Link>
						</Bit>
						<Bit 
							title="Prosjektskisse"
							description="Kort om prosjektet og oppdragsgiver"
						>
							<Link className="jkl-small" href="/assets/Prosjektskisse Fremtind.pdf" download>Last ned</Link>
						</Bit>
						<Bit 
							title="Forprosjektrapport"
							description="Kravspesifikasjon og fremdriftsplan"
						>
							<Link className="jkl-small" href="/assets/Forprosjektrapport gruppe 15.pdf" download>Last ned</Link>
						</Bit>
						<Bit 
							title="Sluttrapport"
							description="Resultat av gjennomført prosjekt"
						>
							<p className="jkl-small">(Nedlastning kommer)</p>
						</Bit>
					</Bits>
				</Wrapper>
			</div>
			<Wrapper>
				<h1 
					className="jkl-heading-2 jkl-spacing-xl--top jkl-spacing-l--bottom"
				>Gruppa</h1>
				<Grid>
					<Testamonial contact="https://linkedin.com" image="/assets/adrian.jpg" name="Adrian Storset">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus cupiditate harum minima veritatis voluptatem enim culpa doloribus consequuntur in quidem.
					</Testamonial>
					<Testamonial contact="https://linkedin.com" image="/assets/mathias.jfif" name="Mathias Rundgreen">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus cupiditate harum minima veritatis voluptatem enim culpa doloribus consequuntur in quidem.
					</Testamonial>
					<Testamonial contact="https://linkedin.com" image="/assets/erik.jpg" name="Erik Sommer">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus cupiditate harum minima veritatis voluptatem enim culpa doloribus consequuntur in quidem.
					</Testamonial>
					<Testamonial contact="https://linkedin.com" image="/assets/mats.jpg" name="Mats Sommervold">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus cupiditate harum minima veritatis voluptatem enim culpa doloribus consequuntur in quidem.
					</Testamonial>
				</Grid>
			</Wrapper>
			<Footer />
		</div>
	);

}

export default App;
