import IntroComponent from './components/intro'
import TabComponent from './components/tab'

function App() {

  return (
    <html className='h-full w-full m-5'>
      <head>
        <title>My first React app</title>
      </head>
      <body className='h-auto w-auto'>
        <p>Mon dossier locataire</p>
        <p></p>
        <IntroComponent />
        <TabComponent />
      </body >
    </html>
  )
}

export default App
