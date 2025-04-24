import AboutPage from '../components/About/aboutPage'
import Team from '../components/About/Team'
import AboutNav from '../components/About/aboutNav'
import AboutFooter from '../components/About/aboutFooter'

export default function About(){
    return(
        <>
            <AboutNav />
            <AboutPage />
            <Team />
            <AboutFooter />
        </>
    )
}