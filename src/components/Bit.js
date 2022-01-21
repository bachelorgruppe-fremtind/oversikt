import { Link } from "@fremtind/jkl-core"

export default ({ title, description, children }) => {
    return (
        <div>
            <h3 className="jkl-heading-4">{title}</h3>
            <p className="jkl-small jkl-spacing-s--top jkl-spacing-s--bottom">{description}</p>
            {children}
        </div>
    )
}