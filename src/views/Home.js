import React from 'react';
// import sections
import HeroFull from '../components/sections/HeroFull';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Tokenomics from '../components/sections/Tokenomics';
import Roadmap from '../components/sections/Roadmap';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <FeaturesTiles id="about" />
        <Roadmap id="roadmap" topDivider pricingSwitcher />
        <Tokenomics id="tokenomics" invertMobile topDivider imageFill />
      </React.Fragment>
    );
  }
}

export default Home;