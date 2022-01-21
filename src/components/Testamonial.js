import { Link } from '@fremtind/jkl-core'

export default ({ name, image, contact, children }) => {
    return (
        <div style={{
            border: '2px solid var(--sand)',
            backgroundColor: 'var(--hvit)',
        }}>
            <div 
                style={{
                    borderRadius: '4px'
                }}
                className='jkl-spacing-l--all'
            >
                <img
                    style={{
                        width: '170px',
                        height: '170px',
                        objectFit: 'cover',
                        borderRadius: '50%'
                    }} 
                    src={process.env.PUBLIC_URL + image}
                    alt={`Portrait of ${name}`}
                    className='jkl-spacing-m--bottom'
                />
                <h3 style={{color:'var(--fjellgra)'}} className="jkl-heading-3 jkl-spacing-s--bottom">{name}</h3>
                <p style={{color:'var(--stein)'}} className="jkl-body jkl-spacing-s--bottom">{children}</p>
                <p className='jkl-body'><Link href={contact} external={true}>Kontakt meg</Link></p>
            </div>
        </div>
    )
}