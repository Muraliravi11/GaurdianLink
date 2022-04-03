
export const SupportWidget = ({ className, title, badgeColor, icon, children}) => { 
    return (
        < div className={`support_widget ${className}`}>
            <h5 className={`badge ${badgeColor}`}>
               { icon && <span className="roun_icon"> </span>} { title }
            </h5>

            <div className="logo__section">
                { children}
            </div>

        </div>
    )
}