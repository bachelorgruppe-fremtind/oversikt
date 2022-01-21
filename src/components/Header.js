import { PrimaryButton } from '@fremtind/jkl-button-react'
import Grid from "./Grid"


export default () => {
    return (
        <div 
            style={{
                backgroundColor:'',
                padding: '50px 0'
            }}
            className="jkl-spacing-l--bottom"
        >
            <h1 className="jkl-heading-1">Fremtind</h1>
			<h2 className="jkl-heading-2">Intern kompetanseplatform</h2>
            <div
                className="jkl-spacing-xl--top"
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'flex-end',
                        gap: '40px'
                    }}
                >
                    <p 
                        style={{
                            color: 'var(--skifer)',
                            maxWidth: '700px'
                        }}
                        className="jkl-body"
                    >
                        Fremtind har i dag et uoversiktlig, spredt og lite attraktivt kompetansetilbud til
                        sine ansatte. Vår oppgave går ut på å gjøre det enklere og mer attraktivt
                        å dele sin kompetanse på kryss av team internt i fremtind.
                    </p>
                    <PrimaryButton
                        onClick={() => window.location = 'https://fremtind.no'}
                    >Gå til Fremtind.no</PrimaryButton>
                </div>
            </div>
        </div>
    )
}