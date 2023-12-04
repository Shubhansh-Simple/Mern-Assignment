/* 
 * HOMEPAGE Of Application
 */
import Header        from './components/Header';
import Footer        from './components/Footer';
import CandidateList from './screens/CandidateList';

const App = () => {
  return (
    <>
      <Header />
      <h1>First React Application</h1>
      <CandidateList />
      <Footer />
    </>
  );
}

export default App;
