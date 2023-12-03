import profil from '../assets/profil.svg'

function CandidatComponent() {
    const divStyle = {
        backgroundImage: `url(${profil})`,
        backgroundSize: 'cover',
        width: '5.75rem',
        height: '5.75rem',
    };

    return (
        <div>
            <h1 style={{ fontSize: '1.25rem' }}>Candidat principal : Fabien Bricard</h1>
            <div className="flex rounded-lg border border-grayGray-10 bg-subtleWhite p-4">
                <div style={divStyle}></div>
                <div>
                    <h2 style={{ fontSize: '1.125rem' }}>Fabien Bricard</h2>
                    <p style={{ fontSize: '0.75rem', fontWeight: '300' }}>@fabien.bricard</p>
                    <div className="flex" style={{ fontSize: '0.75rem' }}>
                        <p className='rounded-lg border border-grayGray-10 bg-subtleWhite p-1'>
                            Product Designer
                        </p>
                        <p className='rounded-lg border border-grayGray-10 bg-subtleWhite p-1'>
                            CDI
                        </p>
                        <p className='rounded-lg border border-grayGray-10 bg-subtleWhite p-1'>
                            Colocation
                        </p>
                    </div>
                    <div className="flex">
                        <p style={{ fontSize: '0.75rem' }} className='rounded-lg border border-grayGray-10 bg-subtleWhite p-1'>
                            Garant</p>
                        <p style={{ fontSize: '0.75rem' }} className='rounded-lg border border-grayGray-10 bg-subtleWhite p-1'>
                            84%</p>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default CandidatComponent