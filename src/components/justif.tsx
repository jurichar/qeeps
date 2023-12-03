function JustificativesComponent() {
    return (
        <div style={{ fontSize: '0.75rem' }} className='flex justify-between rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
            <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '300' }} >Pièces justificatives</p>
                <div className="flex">
                    <p className="rounded-lg border border-grayGray-10 bg-subtleWhite p-1">CNI</p>
                    <p className="rounded-lg border border-grayGray-10 bg-subtleWhite p-1">Revenus</p>
                    <p>+3 autres.</p>
                </div>
            </div>
            <div>
                <p style={{ fontSize: '0.813rem' }} className="rounded-lg border border-grayGray-10 bg-subtleWhite p-1">Télécharger les docs</p>
            </div>
        </div>
    )
}

export default JustificativesComponent