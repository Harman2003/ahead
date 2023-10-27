import { Footer, Navbar } from '../components';
import { About, Timeline, Insights, GetStarted, Hero, CardSection, Objectives } from '../sections';

const Page = () => (
  <div className='snap-y snap-mandatory overflow-y-scroll h-screen'>
    <Navbar />
    <Hero />
    <CardSection />
    <About />
    <Timeline />
    <Insights />
    <GetStarted />
    <Objectives />
    <Footer />
  </div>
);

export default Page;
