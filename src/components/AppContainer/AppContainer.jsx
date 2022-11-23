import {Hero} from '../Hero';

export const AppContainer = () => {
    return (
        <main>
          <Hero title = '25% OFF' text = 'Solo por hoy en toda la tienda' button = 'Ingresar' targetPath='/store' />
        </main>
    )
}