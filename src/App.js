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
							<Link className="jkl-small" href={process.env.PUBLIC_URL + "/assets/Statusrapport okt 2021.pdf"} download>Last ned</Link>
						</Bit>
						<Bit 
							title="Prosjektskisse"
							description="Kort om prosjektet og oppdragsgiver"
						>
							<Link className="jkl-small" href={process.env.PUBLIC_URL + "/assets/Prosjektskisse Fremtind.pdf"} download>Last ned</Link>
						</Bit>
						<Bit 
							title="Forprosjektrapport"
							description="Kravspesifikasjon og fremdriftsplan"
						>
							<Link className="jkl-small" href={process.env.PUBLIC_URL + "/assets/Forprosjektrapport gruppe 15.pdf"} download>Last ned</Link>
						</Bit>
						<Bit 
							title="Sluttrapport"
							description="Resultat av gjennomført prosjekt"
						>
							<Link className="jkl-small" href={process.env.PUBLIC_URL + "/assets/bacheloroppgave.pdf"} download>Last ned</Link>
						</Bit>
					</Bits>
				</Wrapper>
			</div>
			<Wrapper>
				<h1 
					className="jkl-heading-2 jkl-spacing-xl--top jkl-spacing-l--bottom"
				>Gruppa</h1>
				<Grid>
					<Testamonial contact="https://www.linkedin.com/in/adrian-tokle-storset-7777b519b/" image="/assets/adrian.jpg" name="Adrian Storset">
						Jeg er en kreativ gledesspreder. Jeg er løsningsorientert og liker å hjelpe andre med å nå deres mål mens jeg strekker meg etter mine egne.
					</Testamonial>
					<Testamonial contact="https://www.linkedin.com/in/mathias-rundgreen-03350130/" image="/assets/mathias.jfif" name="Mathias Rundgreen">
						Jeg er en positiv og nysgjerrig person som liker å være i aktivitet. Vant til å ta ansvar for egen utvikling gjennom målsetting og strukturert arbeid.
					</Testamonial>
					<Testamonial contact="https://www.linkedin.com/in/erikssommer/" image="/assets/erik.jpg" name="Erik Sommer">
						Jeg er 23 år og liker å holde meg i aktivitet, være sosial og ellers utvikle faglig kompetanse. Jeg liker en utfordring
					</Testamonial>
					<Testamonial contact="https://www.linkedin.com/in/mats-sommervold/" image="/assets/mats.jpg" name="Mats Sommervold">
						Jeg er kreativ og liker å bygge nye ting. Elsker varierte arbeidsoppgaver med få restriksjoner. 
					</Testamonial>
				</Grid>
			</Wrapper>
			<Footer />
		</div>
	);

}

export default App;
