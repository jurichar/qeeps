import logo from '../assets/logo.svg';

function IntroComponent() {
    const divStyle = {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        width: '5.75rem',
        height: '5.75rem',
    };
    return (
        <div>
            <h1>🪪 Mon dossier locataire</h1 >
            <div className='flex'>
                <div style={divStyle}></div>
                <div>
                    <h3>Félicitations, vous avez complété votre dossier à 100% 🎉</h3>
                    <p>Vérifiez rapidement les différents indices correspondants à votre activité.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <p>Votre lien partageable</p>
                    <input type="text" value="https://www.google.com" placeholder="link" />
                </div>
                <div>
                    <p>Envoyer le dossier par e-mail</p>
                    <input type="text" value="https://www.google.com" placeholder="link" />
                </div>
            </div>
        </div >
    )
}

export default IntroComponent