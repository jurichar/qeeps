function MyFileComponent() {
    return (
        <div>
            <div className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <div className="flex">
                    <p>Téléphone</p>
                    <p>06 88 56 45 23</p>
                </div>
                <div className="flex">
                    <p>Mail</p>
                    <p>fabien.bricard932@gmail.com</p>
                </div>
                <div className="flex">
                    <p>Situation professionnelle</p>
                    <p>
                        CDI (Periode d'essai terminée)
                        <br />
                        Prise de fonction le 17/03/2018
                    </p>
                </div>
                <div className="flex">
                    <p>
                        Revenus mensuel net
                        <br />
                        (avant impot)
                    </p>
                    <p>2100€</p>
                </div>
                <div className="flex">
                    <p>Autres revenus</p>
                    <p>150€ (Rente)</p>
                </div>
            </div>
            <div className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <p>Pièces justificatives</p>
                <p>CNI</p>
                <p>Revenus</p>
                <p>+3 autres.</p>
                <p>Télécharger les docs</p>
            </div >
        </div >
    )
}

export default MyFileComponent