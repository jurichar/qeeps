function GarantComponent() {
    return (
        <div>
            <h1>Garant : Alban Colin Bricard</h1>
            <div className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <div className="flex">
                    <p>Nom complet</p>
                    <p>Alban Colin Bricard</p>
                </div>
                <div className="flex">
                    <p>Téléphone</p>
                    <p>07 44 35 45 22</p>
                </div>
                <div className="flex">
                    <p>Relation</p>
                    <p>Père</p>
                </div>
                <div className="flex">
                    <p>Mail</p>
                    <p>alban.c.bricard3@gmail.com</p>
                </div>
                <div className="flex">
                    <p>Situation professionnelle</p>
                    <p>Retraité propriétaire</p>
                </div>
                <div className="flex">
                    <p>
                        Revenus mensuel net
                        <br />
                        (avant impot)
                    </p>
                    <p>1750€</p>
                </div>
                <div className="flex">
                    <p>Autres revenus</p>
                    <p>600€ (Retraite)</p>
                </div>
            </div>

            <div className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <p>Pièces justificatives</p>
                <p>CNI</p>
                <p>Revenus</p>
                <p>+3 autres.</p>
                <p>Télécharger les docs</p>
            </div>
        </div>
    )
}

export default GarantComponent