import logo from '../assets/logo.svg';

function IntroComponent() {
    return (
        <div>
            <h1>🪪 Mon dossier locataire</h1 >
            <div className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4'>
                <div className='flex'>
                    <div style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: 'cover',
                        width: '5.75rem',
                        height: '5.75rem',
                    }}></div>
                    <div>
                        <h3>Félicitations, vous avez complété votre dossier à 100% 🎉</h3>
                        <p>Vérifiez rapidement les différents indices correspondants à votre activité.</p>
                    </div>
                </div>
                <div className='border-t border-grayGray-10 my-4'></div>
                <div className='flex'>
                    <div>
                        <p>Votre lien partageable</p>
                        <input type="text" value="https://www.google.com" placeholder="link" className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4' />
                    </div>
                    <div>
                        <p>Envoyer le dossier par e-mail</p>
                        <input type="text" value="https://www.google.com" placeholder="link" className='rounded-lg border border-grayGray-10 bg-subtleWhite p-4' />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default IntroComponent