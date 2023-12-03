import JustificativesComponent from "./justif"

function GarantComponent() {
    return (
        <div>
            <h1 style={{ fontSize: '1.25rem' }} >Garant : Alban Colin Bricard</h1>
            <div style={{ fontSize: '0.875rem', fontWeight: '300' }} className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <div className="flex justify-between">
                    <p>Nom complet</p>
                    <p>Alban Colin Bricard</p>
                </div>
                <div className="flex justify-between">
                    <p>Téléphone</p>
                    <p>07 44 35 45 22</p>
                </div>
                <div className="flex justify-between">
                    <p>Relation</p>
                    <p>Père</p>
                </div>
                <div className="flex justify-between">
                    <p>Mail</p>
                    <p>alban.c.bricard3@gmail.com</p>
                </div>
                <div className="flex justify-between">
                    <p>Situation professionnelle</p>
                    <p>Retraité propriétaire</p>
                </div>
                <div className="flex justify-between">
                    <p>
                        Revenus mensuel net
                        <br />
                        (avant impot)
                    </p>
                    <p>1750€</p>
                </div>
                <div className="flex justify-between">
                    <p>Autres revenus</p>
                    <p>600€ (Retraite)</p>
                </div>
            </div>
            <JustificativesComponent />
        </div>
    )
}

export default GarantComponent