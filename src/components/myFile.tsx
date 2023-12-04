import JustificativesComponent from "./justif"

function MyFileComponent() {
    return (
        <div>
            <div style={{ fontSize: '0.875rem', fontWeight: '300' }} className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4 my-5'>
                <div className="flex justify-between my-4">
                    <p>Téléphone</p>
                    <p>06 88 56 45 23</p>
                </div>
                <div className="flex justify-between my-4">
                    <p>Mail</p>
                    <p>fabien.bricard932@gmail.com</p>
                </div>
                <div className="flex justify-between my-4">
                    <p>Situation professionnelle</p>
                    <p>
                        CDI (Periode d'essai terminée)
                        <br />
                        Prise de fonction le 17/03/2018
                    </p>
                </div>
                <div className="flex justify-between my-4">
                    <p>
                        Revenus mensuel net
                        <br />
                        (avant impot)
                    </p>
                    <p>2100€</p>
                </div>
                <div className="flex justify-between my-4">
                    <p>Autres revenus</p>
                    <p>150€ (Rente)</p>
                </div>
            </div>
            <JustificativesComponent />
        </div >
    )
}

export default MyFileComponent