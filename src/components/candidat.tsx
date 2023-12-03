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
            <h1>Candidat principal : Fabien Bricard</h1>
            <div className="flex rounded-lg border border-grayGray-10 bg-subtleWhite p-4">
                <div style={divStyle}></div>
                <div>
                    <h2>Fabien Bricard</h2>
                    <p>@fabien.bricard</p>
                    <div className="flex">
                        <p>
                            Product Designer
                        </p>
                        <p>
                            CDI
                        </p>
                        <p>
                            Colocation
                        </p>
                    </div>
                    <div className="flex">
                        <p>Garant</p>
                        <p>84%</p>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default CandidatComponent